<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePlayer, usePlayers } from "./db";


const player = usePlayer();
const name = computed(() => player.value?.name);

const allPlayers = usePlayers();
console.log(allPlayers.value);

const pointsGroom = computed(() =>
  (allPlayers.value ?? []).filter(p => p.key.startsWith('g')).reduce((acc, p) => acc + p.points, 0));
const pointsBride = computed(() =>
  (allPlayers.value ?? []).filter(p => p.key.startsWith('b')).reduce((acc, p) => acc + p.points, 0));

const maxPoints = computed(() => Math.max(pointsBride.value, pointsGroom.value, 1));
const widthBride = computed(() => pointsBride.value / maxPoints.value * 100);
const widthGroom = computed(() => pointsGroom.value / maxPoints.value * 100);

const team = computed(() => {
  return player.value?.key?.startsWith('b') ? '👰‍♀️ Bride' : '🤵 Groom';
});

</script>

<template>
  <section class="header">
    <div class="summary" v-if="name">
      <div>
        <div><strong>{{ name }}</strong> (+{{ player.points }}pts)</div>
      </div>
      <div>Team {{ team }}</div>
    </div>
    <div class="teams">
      <div class="team" :style="{ width: widthBride + '%' }">👰‍♀️ {{ pointsBride }}pts</div>
      <div class="team team--groom" :style="{ width: widthGroom + '%' }">{{ pointsGroom }}pts 🤵</div>
    </div>
  </section>
  <section class="spacer">

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
  flex-direction: column;
  justify-content: center;
  background: #88f0f0;
  font-size: 1.6rem;
  line-height: 1.1;
  height: 7rem;
  gap: 1rem;
}

.summary {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  flex: 0 0 auto;

}

.summary>div {
  padding: 1rem;
  padding-bottom: 0;
}

.teams {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
  padding-bottom: 1rem;
}

.team {
  background: #fe67ff;
  height: 100%;
  border-radius: 0 1rem 1rem 0;
  line-height: 3rem;
  padding: 0 1rem;
  min-width: fit-content;
}

.team.team--groom {
  background: #8686ff;
  text-align: right;
  border-radius: 1rem 0 0 1rem;
}

.title {}

.spacer {
  height: 7rem;
}
</style>
