<script setup lang="ts">
import { ref, computed } from 'vue';
import { useConfetti } from './confetti';
import { usePlayer, useTime, db, pub, useSchedule } from "./db";
import { runTransaction, ref as dbref } from "firebase/database";
import PubQuizQuestion from './PubQuizQuestion.vue';

const props = defineProps<{
  schedule: any,
  current: boolean,
}>()
const schedule = props.schedule;
const current = props.current;


</script>

<template>
  <section class="quiz-round">
    <h1>{{ schedule.name }}</h1>
    <h2>{{ schedule.text }}</h2>
    <p v-if="current" class="rules">Select your best guess for each question. You can change your guess until the end of
      the hour. Each guess scores {{ schedule.quiz_points }} points.
    </p>
    <PubQuizQuestion v-bind:key="id" v-for="id in schedule.questions" :id="id" :current="current" />
  </section>
</template>

<style scoped>
.quiz-round {
  border: 1px solid black;
  padding: 1rem;
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  display: block;
  padding-bottom: 0.5rem;

}

.rules {
  padding: 0.5rem;
  color: #666;
}
</style>
