<script setup lang="ts">
import { useTime } from "./db";
import { displayTime } from "./utils";
import PubAdmin from "./PubAdmin.vue";

const time = useTime();

</script>

<template>
  <section class="header">
    <div class="title">Till Quiz Do Us Part: Team Bride vs. Team Groom</div>
    <PubAdmin />
    <div class="clock">{{ displayTime(time) }}</div>
  </section>
  <section class="spacer" />
</template>

<style scoped>
.header {
  width: 100vw;
  height: 4rem;
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  flex-direction: row;
  justify-content: space-between;
  background: #88f0f0;
  padding: 1rem;
}

.title {
  font-weight: bold;
}

.spacer {
  height: 4rem;
}
</style>
