<script setup lang="ts">
import { computed } from 'vue';
import { usePlayers } from './db';

const props = defineProps<{
  team: string,
}>()
const team = props.team;

const allPlayers = usePlayers();

const players = computed(() => {
  return allPlayers.value ? allPlayers.value
    .sort((a, b) => b.points - a.points)
    .map((player, index) => ({
      ...player, rank: index + 1, annotation: [
        (player.clicks ? (player.clicks + ' 🥂 ') : null), (player.correct_answers ? (player.correct_answers + ' ✅') : null)].filter(a => a).join(' + ')
    }))
    .filter((e) => e.key.startsWith(team)) : [];
});

const total = computed(() => players.value.reduce((acc, player) => acc + player.points, 0));

const name = team === 'b' ? 'Team Bride' : 'Team Groom';

</script>

<template>
  <div class="team">
    <div class="header">
      <h1>{{ name }}</h1>
      <div class="total">{{ total }} points</div>
    </div>
    <table>
      <tr v-for="player in players" :key="player.key">
        <td class="c-rank">#{{ player.rank }}</td>
        <td class="c-player">{{ player.name }}</td>
        <td class="c-annotation">{{ player.annotation }}</td>
        <td class="c-score">{{ player.points }} Points</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.team {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid var(--pub-border);
  background: var(--pub-card-background);

}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 3rem;
  padding-right: 1rem;
  align-content: baseline;
  font-size: 2.5rem;
}

h1,
.total {
  padding: 1rem;
  font-weight: bold;
}

table {
  text-align: left;
  margin-top: 1rem;
}

td {
  vertical-align: center;
  padding: 0.5rem;
  line-height: 3rem;
}

tr:nth-child(odd) {
  background: #d9fafb;
}

.c-rank {
  width: 6rem;
  padding-left: 1rem;

}

.c-annotation {
  width: 10rem;
  text-align: right;
  padding-right: 1rem;
}

.c-score {
  width: 10rem;
  text-align: right;
  font-weight: bold;
  padding-right: 1rem;
}
</style>
