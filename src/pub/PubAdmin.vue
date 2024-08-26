<script setup lang="ts">
import { db, useTime } from "./db";
import { runTransaction, ref as dbref } from "firebase/database";
import { displayTime } from "./utils";

const dataRef = dbref(db, 'process/time');
const onChange = (value: number) => {
  runTransaction(dbref(db, 'process/time'), current => current + value);
}

</script>

<template>
  <section class="admin">
    <button v-on:click="onChange(10)">+</button>
    <button v-on:click="onChange(-10)">-</button>
  </section>
</template>

<style scoped></style>
