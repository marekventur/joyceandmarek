import { initializeApp } from "firebase/app";
import { ref, onMounted, onUnmounted, type Ref } from 'vue';
import { getDatabase, ref as dbref, off, onValue, get, set, push, DataSnapshot } from "firebase/database";
import { usePlayerId } from "./utils";

const firebaseConfig = {
  databaseURL: "https://joyceandmarek-7e7f4-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    // App has become visible
    const connectedRef = dbref(db, '.info/connected');
    onValue(connectedRef, (snap) => {
      if (snap.val() === false) {
        // Connection to Firebase is lost, reload the page
        window.location.reload();
      }
    });
  }
});

const time = ref(-1);
export function useTime() {
  if (time.value === -1) {
    const dataRef = dbref(db, 'process/time');
    onMounted(() => {
      onValue(dataRef, t => time.value = t.val());
    });
    onUnmounted(() => off(dataRef));
  }
  return time;
}

interface Player {
  name: string;
  key: string,
  points: number,
  clicks: number,
  correct_answers: number,
}

const players = ref<Array<Player>|null>(null);
export function usePlayers(): Ref<Array<Player>> {
  if (!players.value) {
    const dataRef = dbref(db, 'players');
    onMounted(() => {
      onValue(dataRef, t => players.value = Object.entries(t.val()).map(([key, p]: [string, any]) => ({
        ...p as object, 
        name: (p.name || '') as string,
        key: key,
        points: ((p.click_points || 0) + (p.quiz_points || 0)) as number,
        clicks: (p.clicks || 0) as number,
        correct_answers: (p.correct_answers || 0) as number,
      })));
    });
    onUnmounted(() => off(dataRef));
  }
  return players as Ref<Array<Player>>;
}

interface Round {
  end: number;
  name: string;
  start: number;
  click_points: number;
  quiz_points: number;
}

const schedule = ref<Array<Round>|null>(null);
export function useSchedule(): Ref<Array<Round>> {
  if (!schedule.value) {
    const dataRef = dbref(db, 'schedule');
    onMounted(() => {
      onValue(dataRef, (t: DataSnapshot) => schedule.value = (Object.values(t.val()) as Array<Round>).sort((a, b) => a.start - b.start));
    });
    onUnmounted(() => off(dataRef));
  }
  return schedule as Ref<Array<Round>>;
}

const player = ref<any>(null);
export function usePlayer() {
  const playerId = usePlayerId();
  if (!playerId) {
    return ref(null);
  } 

  if (!player.value) {
    const dataRef = dbref(db, 'players/' + playerId);
    player.value = {};
    onMounted(async () => {
      const snapshot = await get(dataRef);
      if (!snapshot.exists()) {
        // Player doesn't exist, create a new one
        await set(dataRef, {
          name: ''
        });
      }
      onValue(dataRef, t => player.value = {...t.val(), key: playerId, points: ((t.val().click_points || 0) + (t.val().quiz_points || 0)) as number});
    });
    onUnmounted(() => off(dataRef));
  }
  return player;
}

export function pub(topic: string, message: object) {
  const topicRef = dbref(db, `pubsub/${topic}`);
  push(topicRef, {
    ...message,
    timestamp: Date.now()
  });
};

export function sub(topic: string, callback: (item: object) => void) {
  const topicRef = dbref(db, `pubsub/${topic}`);
  onMounted(async () => {
    onValue(topicRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        Object.values(data).forEach(item => {
          callback(item as object);
        });
      }
    });
  });
  onUnmounted(() => off(topicRef));
};


export {
  db,
};