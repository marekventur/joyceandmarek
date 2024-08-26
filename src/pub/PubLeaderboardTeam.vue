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

const name = team === 'b' ? 'Team Bride' : 'Team Groom';

</script>

<template>
  <div class="team">
    <h1>{{ name }}</h1>
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

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  padding: 1rem;
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
