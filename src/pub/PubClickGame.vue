<script setup lang="ts">
import { ref, computed } from 'vue';
import { useConfetti } from './confetti';
import { usePlayer, useTime, db, pub, useSchedule } from "./db";
import { runTransaction, ref as dbref } from "firebase/database";

const time = useTime();
const player = usePlayer();
const schedule = useSchedule();
const currentRound = computed(() => {
  return schedule.value.find((round: any) => round.start <= time.value && round.end >= time.value);
});
const pointsIncrement = computed(() => currentRound.value?.quiz_points ?? 0);

const addConfetti = useConfetti();
const toast = () => {
  addConfetti({
    emojis: ['🥂', '🍺', '🍹', '🍸'],
  });
  runTransaction(dbref(db, 'players/' + player.value?.key), (current) => {
    return { ...current, click_points: (current.click_points ?? 0) + pointsIncrement.value, clicks: (current.clicks ?? 0) + 1, last_click: time.value };
  });
  pub('toast', { name: player.value?.name, team: player.value?.key[0] });
}

const countdown = computed(() => {
  return Math.max(player.value.last_click - time.value + 10, 0);
});


</script>

<template>
  <section class="player-click" v-if="pointsIncrement">
    <h2>Let's get fizz-ical!</h2>
    <div class="disabled" v-if="countdown > 0">Time until you can toast again: {{ countdown }} minutes</div>
    <div class="counter" v-if="player.clicks > 0">You have toasted {{ player.clicks }} times this evening for a total of
      {{ player.click_points }} points</div>
    <button @click="toast" v-bind:disabled="countdown > 0">🥂</button>
    <div class="explanation">Raise a glass, earn some class! (+{{ pointsIncrement }} point)</div>
  </section>
</template>

<style scoped>
.player-click {
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
}

h2 {
  font-size: 3rem;
}

button {
  font-size: 8rem;
  height: 10rem;
  margin-top: 1rem;
  border: none;
  background: transparent;
}

button:disabled {
  opacity: 0.5;
}

.counter,
.disabled {
  margin-top: 1rem;
}

.disabled {
  color: red;
}
</style>
