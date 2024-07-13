<script setup lang="ts">
    import { defineProps } from 'vue'

    const props = defineProps({
        img: {
            type: String
        }
    });
</script>

<template>
    <div class="section">
       <div class="left">
            <div class="left-circle">
                <div class="left-inner" :style="{ backgroundImage: 'url('+img+')' }" />
             </div>
       </div>
       <div class="right">
            <slot />
       </div>
    </div>
</template>

<style>
    .section {
        width: 30rem;
        display: flex;
        flex-direction: row;
        justify-items: flex-start;
        align-items: center;
    }
    .left {
        display: flex;
        flex-direction: column;
        align-items: center ;
    }
    .section:not(:last-child) .left::after{
        content:'';
        width: 3px;
        height: 3rem;
        background-color: #EC6669;
        display: block;
    }
    .left-circle {
        width: 10rem;
        height: 10rem;
        border-radius: 99999px;
        border: 3px solid #EC6669;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .left-inner {
        width: 75%;
        height: 75%;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
    .right {
        margin-left: 3rem;
        text-align: left;
    }
    .section:not(:last-child) .right {
        margin-bottom: 3rem;
    }
</style>
  