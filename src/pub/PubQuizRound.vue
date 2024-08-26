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
const time = useTime();
const submitted = ref(false);
const addConfetti = useConfetti();

const submit = () => {
  submitted.value = true;
  addConfetti();
}

</script>

<template>
  <section class="quiz-round">
    <h1>{{ schedule.name }}</h1>
    <h2>{{ schedule.text }} <span v-if="!current"> - <strong>{{ schedule.quiz_points }} points</strong> per correct
        answer</span></h2>
    <p v-if="current" class="rules">Select your best guess for each question. You can change your guess until the end of
      the hour. Each correct guess scores <strong>{{ schedule.quiz_points }} points</strong> this round.
    </p>
    <PubQuizQuestion v-bind:key="id" v-for="id in schedule.questions" :id="id" :current="current" />

    <div class="footer" v-if="current">
      <button class="submit" v-if="!submitted" @click="submit">💌 Submit</button>
      <p v-if="!submitted" class="rules">(you can still change your answer until the hour is over!)</p>
      <p v-if="submitted" class="rules">You'll find out what you got right in <strong>{{ schedule.end - time }}
          minutes</strong> <br />
      </p>
    </div>
  </section>
</template>

<style scoped>
.quiz-round {
  border: 1px solid var(--pub-border);
  background: var(--pub-card-background);
  padding: 1rem;
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

h1 {
  font-weight: bold;
  display: block;
  padding-bottom: 0.5rem;

}

.rules {
  font-style: italic;
  padding-top: 1rem;
}

.footer {
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  padding-top: 2rem;
}

.submit {
  font-weight: bold;
  background: #e6c2ff;
  padding: 1rem;
}
</style>
