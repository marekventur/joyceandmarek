<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import PubHeader from './PubHeader.vue';
import PubLeaderboard from './PubLeaderboard.vue';
import PubPlayerView from './PubPlayerView.vue';
import { usePlayerId } from './utils';

const playerId = usePlayerId();


</script>

<template>
  <div>
    <PubHeader />
    <PubPlayerView v-if="playerId" />
    <PubLeaderboard />

  </div>
</template>

<style scoped></style>
