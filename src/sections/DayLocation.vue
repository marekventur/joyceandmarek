import Header from "../sections/Header.vue";
<script setup lang="ts">
    import { defineProps } from 'vue'

    const props = defineProps({
        line1: {
            type: String
        },
        line2: {
            type: String
        }
    });
</script>

<template>
    <div class="location">
        <em>{{line1}}</em>
        {{line2}}
    </div>
</template>

<style>
.location {
    margin: 2rem 0 4rem 0;
}

.location em {
    display: block;
    text-transform: uppercase;
    width: 100%;
    font-weight: bold;
}
</style>
  