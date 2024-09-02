<script setup lang="ts">
import { useTime } from "./db";
import { displayTime } from "./utils";
import PubAdmin from "./PubAdmin.vue";

const time = useTime();

</script>

<template>
  <section class="header">
    <h1 class="title">Something Borrowed, Something Knew: Nuptial Pursuit</h1>
    <PubAdmin />
  </section>
  <section class="spacer">
    <h1 class="title">Something Borrowed, Something Knew: Nuptial Pursuit</h1>
  </section>
</template>

<style scoped>
.header {
  width: 100vw;
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  flex-direction: row;
  justify-content: space-between;
  background: #88f0f0;
  padding: 1rem;
  font-size: 2.5rem;
  line-height: 1.1;
}

.title {}

.spacer {
  padding: 0.5rem 1rem;
  font-size: 2.5rem;
  line-height: 1.1;
  color: transparent;
}
</style>
