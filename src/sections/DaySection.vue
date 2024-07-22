<script setup lang="ts">
    import { defineProps } from 'vue'

    const props = defineProps({
        img: {
            type: String
        },
        time: {
            type: String
        },
        time2: {
            type: String
        }
    });
</script>

<template>
    <div class="section">
       <div class="left" :style="{ backgroundImage: 'url('+img+')' }" />
       <div class="right">
            <div class="time">{{time}}<br><i>{{time2}}</i></div>
            <div class="slot">
                <slot />
            </div>
       </div>
    </div>
</template>

<style scoped>
    .section {
        width: 30rem;
        display: flex;
        flex-direction: row;
        justify-items: flex-start;
        align-items: center;
        margin-bottom: 4rem;
        justify-content: space-between;
        font-size: 1.4rem;
    }
    .left {
        min-width: 10rem;
        height: 10rem;
        margin-right: 10rem;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
    .right {
        text-align: left;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-around;
    }

    .time {
        width: 12rem;
        flex: 0 0 auto;
        font-weight: bold;
    }
    i {
        font-style: italic;
    }
    .slot {
        flex: 1 1 auto;
        width: 20rem;
        max-width: calc(100vw - 40rem);
    }

    @media (max-width: 499px) {
        .section {
            width: 100%;
            justify-content: center;
        }
        .right {
            flex-direction: column;
        }
        .time {
            margin-bottom: 1rem;
        }
        .left {
            width: 15vw;
            height: 15vw;

            margin-right: calc(5vw + 5rem);
        }
        .slot {
            max-width: calc(100vw - 20rem);
        }
    }
</style>
  