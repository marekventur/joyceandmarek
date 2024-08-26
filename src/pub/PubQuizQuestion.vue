<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useConfetti } from './confetti';
import { usePlayer, useTime, db, pub, useSchedule, } from "./db";
import { runTransaction, ref as dbref, onValue, off } from "firebase/database";
import { usePlayerId } from './utils';

const props = defineProps<{
  id: any,
  current: boolean,
}>()
const id = props.id;
const current = props.current;
const playerId = usePlayerId();
const correct = ref(-1);

const question = ref<any>({});
const dataRef = dbref(db, 'questions/' + id);
onMounted(() => {
  onValue(dataRef, t => {
    question.value = t.val();
    if (!current) {
      correct.value = t.val().correct;
    }
  });
});
onUnmounted(() => off(dataRef));

const selected = ref(-1);
const selectedRef = dbref(db, 'players/' + playerId + '/answers/' + id);
onMounted(() => {
  onValue(selectedRef, t => selected.value = t.val());
});
onUnmounted(() => off(selectedRef));

const selectAnswer = (index: number) => {
  if (current) {
    runTransaction(selectedRef, () => index);
  }
}


</script>

<template>
  <section class="quiz-question"
    :class="{ 'quiz-question--correct': !current && correct === selected, 'quiz-question--incorrect': !current && correct !== selected }"
    v-if="question">
    <h1>{{ question.question }}</h1>
    <div class="answers">
      <button class="answer" :disabled="!current"
        :class="{ 'answer--clickable': current, 'answer--selected': index === selected, 'answer--correct': index === correct, 'answer--incorrect': (index !== correct && !current) }"
        :key="index" v-for="(answer, index) in question.answers" @click="selectAnswer(index)">
        {{ index + ' ' + answer }}
      </button>
    </div>

  </section>
</template>

<style scoped>
.quiz-question {
  padding: 1rem;
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

.quiz-question--incorrect {
  background: #fff3f3;
}

.quiz-question--correct {
  background: #e1fbe3;
}

.answers {
  display: flex;
  flex-direction: row;
}

.answer {
  border: 1px solid black;
  background: #f0f0f0;
  padding: 1rem;
  margin: 0.5rem;
}

.answer--clickable {
  cursor: pointer;
  background: #ffffff;
}

.answer--selected {
  background: #70f0f0;
  border-width: 2px;
  font-weight: bold;
}

.answer--correct {
  background: #d0ffd3;
}

.answer--correct.answer--selected {
  background: #70f079;
}

.answer--incorrect.answer--selected {
  background: #fcd3d3;
}
</style>
