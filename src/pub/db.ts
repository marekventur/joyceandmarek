import { initializeApp } from "firebase/app";
import { ref, onMounted, onUnmounted } from 'vue';
import { getDatabase, ref as dbref, off, onValue, get, set, push } from "firebase/database";
import { usePlayerId } from "./utils";

const firebaseConfig = {
  databaseURL: "https://joyceandmarek-7e7f4-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const time = ref(null);
export function useTime() {
  if (!time.value) {
    const dataRef = dbref(db, 'process/time');
    onMounted(() => {
      onValue(dataRef, t => time.value = t.val());
    });
    onUnmounted(() => off(dataRef));
  }
  return time;
}

const players = ref(null);
export function usePlayers() {
  if (!players.value) {
    const dataRef = dbref(db, 'players');
    onMounted(() => {
      onValue(dataRef, t => players.value = t.val());
    });
    onUnmounted(() => off(dataRef));
  }
  return players;
}

const schedule = ref<any>(null);
export function useSchedule() {
  if (!schedule.value) {
    const dataRef = dbref(db, 'schedule');
    onMounted(() => {
      onValue(dataRef, t => schedule.value = Object.values(t.val()).sort((a, b) => a.start - b.start));
    });
    onUnmounted(() => off(dataRef));
  }
  return schedule;
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
      onValue(dataRef, t => player.value = {...t.val(), key: playerId});
    });
    onUnmounted(() => off(dataRef));
  }
  return player;
}

export function pub(topic, message) {
  const topicRef = dbref(db, `pubsub/${topic}`);
  push(topicRef, {
    ...message,
    timestamp: Date.now()
  });
};

export function sub(topic, callback) {
  const topicRef = dbref(db, `pubsub/${topic}`);
  onMounted(async () => {
    onValue(topicRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        Object.values(data).forEach(item => {
          callback(item);
        });
      }
    });
  });
  onUnmounted(() => off(topicRef));
};


export {
  db,
};