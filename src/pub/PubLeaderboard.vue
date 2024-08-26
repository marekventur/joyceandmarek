<script setup lang="ts">
import { computed } from 'vue';
import PubLeaderboardTeam from './PubLeaderboardTeam.vue';
import { useSchedule, useTime } from './db';

// @ts-nocheck

const schedule = useSchedule();
const time = useTime();
const lastRound = computed(() => {
  const rounds = Object.values(schedule.value)
    .filter((round) => round.end < time.value)
    .sort((a, b) => b.end - a.end ?? 0);
  if (rounds.length === 0) {
    return null;
  }
  return rounds[0];
});
</script>

<template>
  <div class="boards">
    <PubLeaderboardTeam team="b" />
    <PubLeaderboardTeam team="g" />
  </div>
  <div class="last-round" v-if="false && lastRound">
    <h1>Last Round: {{ lastRound?.name }}</h1>

  </div>
</template>

<style scoped>
.boards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;
  align-items: flex-start;
}

@media (max-width: 999px) {
  .boards {
    flex-direction: column;
    align-items: stretch;
  }
}

.boards>* {
  flex: 1;
}

.last-round {
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0px;
  right: 0;
  left: 0;
}
</style>
