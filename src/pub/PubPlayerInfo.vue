<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePlayer, useTime, db } from "./db";
import { runTransaction, ref as dbref } from "firebase/database";

const player = usePlayer();
const changeNameManual = ref(false);
const name = ref(player.value?.name);
const saveName = async () => {
  if (name.value && name.value.length >= 3) {
    const dataRef = dbref(db, 'players/' + player.value?.key);

    await runTransaction(dataRef, (current) => {
      if (current === null) {
        player.value = { name: name.value };
      } else {
        player.value = { ...current, name: name.value };
      }
      return player.value;
    });
    changeNameManual.value = false;
    window.location.reload();
  }
}
const startChangeName = () => {
  changeNameManual.value = true;
  name.value = player.value?.name;
}

const changeName = computed(() => {
  return changeNameManual.value || !player.value?.name || player.value?.name.length < 3;
});

const team = computed(() => {
  return player.value?.key?.startsWith('b') ? 'Bride' : 'Groom';
});

</script>

<template>
  <section class="player-info">
    <div class="welcome-name" v-if="!changeName">
      <h1>Hey there, {{ player.name }}!</h1>
      <button @click="startChangeName">Change Name</button>
    </div>
    <div class="change-name" v-if="changeName">
      Your name: <input type="text" v-model="name" />
      <button @click="saveName" :disabled="!name || name.length < 3">Save</button>
    </div>
    <div class="team">
      You are in <em>Team {{ team }}</em>, answer questions to boost the team's combined points!
    </div>
    <div class="points">
      You have collected <em>{{ player.points ?? 0 }} points</em> this evening!<br />
      <a class="leaderboard" href="/pub/index.html#leaderboard" target="_blank">Check the leaderboard</a>
    </div>
  </section>
</template>

<style scoped>
.player-info {
  border: 1px solid var(--pub-border);
  background: var(--pub-card-background);
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ;
}

.leaderboard {
  display: block;
  margin-top: 1rem;
}

.change-name,
.welcome-name {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: first baseline;
}

.change-name button,
.change-name input,
.welcome-name button {
  margin-left: 1rem;
}

.points,
.team {
  margin-top: 1rem;
  text-align: center;
}

em {
  font-weight: bold;
}
</style>
