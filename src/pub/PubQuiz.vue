<script setup lang="ts">
import { ref, computed } from 'vue';
import { useConfetti } from './confetti';
import { usePlayer, useTime, db, pub, useSchedule } from "./db";
import { runTransaction, ref as dbref } from "firebase/database";
import PubQuizRound from './PubQuizRound.vue';

const schedule = useSchedule();
const time = useTime();
const currentRound = computed(() => {
  return schedule.value.find((round: any) => round.start <= time.value && round.end >= time.value);
});

const previousRounds = computed(() => {
  return schedule.value.filter((round: any) => round.end < time.value);
});

</script>

<template>
  <section class="player-quiz">
    <h1>Current quiz round</h1>
    <PubQuizRound v-if="currentRound" :schedule="currentRound" :current="true" />
    <h1>Did you get the answer right?</h1>
    <PubQuizRound v-bind:key="round.start" v-for="round in previousRounds" :schedule="round" :current="false" />
  </section>
</template>

<style scoped>
.player-quiz {
  display: flex;
  flex-direction: column;
  width: 100%;
}


h1 {
  font-size: 3rem;
  padding: 1rem;
  padding-top: 2rem;
}
</style>
