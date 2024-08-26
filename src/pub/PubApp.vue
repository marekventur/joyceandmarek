<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import PubHeader from './PubHeader.vue';
import PubLeaderboard from './PubLeaderboard.vue';
import PubPlayerView from './PubPlayerView.vue';
import PubToastAnnouncer from './PubToastAnnouncer.vue';
import { usePlayerId } from './utils';


const playerId = usePlayerId();



</script>

<template>
  <div class="main">
    <PubHeader />
    <PubPlayerView v-if="playerId" />
    <PubLeaderboard />
    <PubToastAnnouncer />
  </div>
</template>

<style scoped>
.main {
  background: #bd83ff;
  height: 100vh;
}
</style>
