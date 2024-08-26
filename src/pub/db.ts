import { initializeApp } from "firebase/app";
import { ref, onMounted, onUnmounted } from 'vue';
import { getDatabase, ref as dbref, off, onValue, get, set } from "firebase/database";
import { usePlayerId } from "./utils";

const firebaseConfig = {
  databaseURL: "https://joyceandmarek-7e7f4-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function useTime() {
  const data = ref(0);
  const dataRef = dbref(db, 'process/time');
  onMounted(() => {
    onValue(dataRef, t => data.value = t.val());
  });
  onUnmounted(() => off(dataRef));
  return data;
}

export function usePlayers() {
  const data = ref({});
  const dataRef = dbref(db, 'players');
  onMounted(() => {
    onValue(dataRef, t => data.value = t.val());
  });
  onUnmounted(() => off(dataRef));
  return data;
}

export function useSchedule() {
  const data = ref({});
  const dataRef = dbref(db, 'schedule');
  onMounted(() => {
    onValue(dataRef, t => data.value = t.val());
  });
  onUnmounted(() => off(dataRef));
  return data;
}

export function usePlayer() {
  const playerId = usePlayerId();
  if (!playerId) {
    return ref(null)
  } 

  const data = ref({});
  const dataRef = dbref(db, 'players/' + playerId);
  onMounted(async () => {
    const snapshot = await get(dataRef);
    console.log(snapshot);
    if (!snapshot.exists()) {
      // Player doesn't exist, create a new one
      await set(dataRef, {
        name: ''
      });
    }
    onValue(dataRef, t => data.value = {...t.val(), key: playerId});
  });
  onUnmounted(() => off(dataRef));
  return data;
}


export {
  db,
};