<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePlayer, useTime, db } from "./db";
import { runTransaction, ref as dbref, set } from "firebase/database";
import { sub } from './db';
import { useConfetti } from './confetti';

const toast = ref();

if (window.location.hash.includes('leaderboard')) {
  const addConfetti = useConfetti();
  sub('toast', (message: any) => {
    addConfetti({
      emojis: ['🥂', '🍺', '🍹', '🍸'],
      confettiNumber: 10,
      emojiSize: 300,
    });
    toast.value = message;
    setTimeout(() => {
      toast.value = null;
    }, 30000);
  });
  navigator.wakeLock.request('screen');
}
</script>

<template>
  <section class="toast-announcer" v-if="toast">
    <h1>{{ toast.name }} sends a toast!</h1>
    <h2>+{{ toast.points }} Point for Team {{ toast.team === 'g' ? 'Groom' : 'Bride' }}</h2>
  </section>
</template>

<style scoped>
.toast-announcer {
  background: blue;
  color: white;

  border-radius: 3rem;
  position: fixed;
  top: 10vh;
  bottom: 10vh;
  right: 10vw;
  left: 10vw;
  display: flex;
  flex-direction: column;
  line-height: 8rem;
}

h1 {
  font-size: 5rem;
}

h2 {
  font-size: 3rem;
}
</style>
