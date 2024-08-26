<script setup lang="ts">
import PubPlayerInfo from "./PubPlayerInfo.vue";
import PubClickGame from "./PubClickGame.vue";

import { useTime, usePlayer } from "./db";
import { displayTime, usePlayerId } from "./utils";


const player = usePlayer();

</script>

<template>
  <section class="player-view">
    <PubPlayerInfo />
    <PubClickGame v-if="player.name" />
  </section>
</template>

<style scoped>
.player-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 100%;
}
</style>
