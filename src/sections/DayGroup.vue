<script setup lang="ts">
    
</script>

<template>
    <div class="day-group">
        <div class="inner">
            <slot />
        </div>
        <div class="spacer" />
    </div>
</template>

<style scoped>
    .day-group {
        position: relative;
        width: 50rem;
        margin: auto;
    }
    
    .day-group .inner {
        display: flex;
        flex-direction: column;
        z-index: 1;
        align-items: center;
        align-items: flex-start;
    }

    .day-group .spacer {
        position: absolute;
        left: 24%;
        top: 0;
        bottom: 0;
        background: url('../assets/day_spacer.svg') center no-repeat;
        background-size: contain;
        width: 6rem;
        z-index: 0;
    }

    @media (max-width: 499px) {
        .day-group {
            width: 90vw;
        }
        .day-group .inner {
            width: 100vw;
            align-items: center;
        }

        .day-group .spacer {
            left: calc(23.5vw + 2.5rem);
        }
    }
</style>
  