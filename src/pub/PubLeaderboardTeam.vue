<script setup lang="ts">
import { computed } from 'vue';
import { usePlayers } from './db';

const props = defineProps<{
  team: string,
}>()
const team = props.team;

const allPlayers = usePlayers();

const players = computed(() => {
  return allPlayers.value ? Object.entries(allPlayers.value)
    .filter(([id, _]) => id.startsWith(team))
    .map(([id, player]) => ({ id, ...player }))
    .sort((a, b) => b.points - a.points)
    .map((player, index) => ({ ...player, rank: index + 1 })) : [];
});

const name = team === 'b' ? 'Team Bride' : 'Team Groom';

</script>

<template>
  <div class="team">
    <h1>{{ name }}</h1>
    <table>
      <tr v-for="player in players" :key="player.id">
        <td class="c-rank">#{{ player.rank }}</td>
        <td class="c-player">{{ player.name }}</td>
        <td class="c-score">{{ player.points }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.team {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid black;
  padding: 1rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

table {
  text-align: left;
  margin-top: 1rem;
}

.c-rank {
  width: 6rem;
}

.c-score {
  width: 2rem;
}
</style>
