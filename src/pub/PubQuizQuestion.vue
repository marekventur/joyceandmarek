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
  onValue(selectedRef, t => selected.value = t.val() ?? -1);
});
onUnmounted(() => off(selectedRef));

const selectAnswer = (index: number) => {
  if (current) {
    runTransaction(selectedRef, () => index);
  }
}

const prefix = computed(() => {
  if (current || selected.value === -1) {
    return '';
  } else {
    return correct.value === selected.value ? '✅ ' : '❌ ';
  }
})


</script>

<template>
  <section class="quiz-question"
    :class="{ 'quiz-question--correct': !current && correct === selected, 'quiz-question--incorrect': !current && correct !== selected && selected > -1 }"
    v-if="question">
    <p class="text">{{ prefix + question.question }}</p>
    <div class="answers">
      <button class="answer" :disabled="!current"
        :class="{ 'answer--img': answer.startsWith('http'), 'answer--clickable': current, 'answer--selected': index === selected, 'answer--correct': index === correct, 'answer--incorrect': (index !== correct && !current) }"
        :style="{ backgroundImage: answer.startsWith('http') ? 'url(' + answer + ')' : '' }" :key="index"
        v-for="(answer, index) in question.answers" @click="selectAnswer(index)">
        {{ answer.startsWith('http') ? '' : answer }}
      </button>
    </div>

  </section>
</template>

<style scoped>
.quiz-question {
  width: 100%;
  margin-top: 1rem;
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 1rem;
}

.text {
  font-weight: 600;
}

.quiz-question--incorrect {
  background: #fff3f3;
}

.quiz-question--correct {
  background: #e1fbe3;
}

.answers {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
}

.answer {
  flex: 1;
  min-width: 40%;
  border: 1px solid black;
  background: #f0f0f0;
  padding: calc(1rem);
}

.answer.answer--img {
  background-size: contain;
  background-position: center;
  min-height: 20rem;
  background-repeat: no-repeat;
}

.answer--clickable {
  cursor: pointer;
  background-color: #ffffff;
}

.answer--selected {
  background-color: #70f0f0;
  border-width: 2px;
  padding: calc(1rem);
  font-weight: 600;
}

.answer--correct {
  background-color: #d0ffd3;
}

.answer--correct.answer--selected {
  background-color: #70f079;
}

.answer--incorrect.answer--selected {
  background-color: #fcd3d3;
}
</style>
