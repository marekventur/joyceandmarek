<script setup lang="ts">
    import { defineProps } from 'vue'

    const props = defineProps({
        bgColor: {
            type: String
        },
        headerImg: {
            type: String
        }
    });
  
</script>

<template>
    <section class="day" :style="{ backgroundColor: bgColor }">
        <div class="inner">
            <div class="header" :style="{ backgroundImage: 'url(/src/assets/'+headerImg+')' }" />
            <slot />
        </div>
    </section>
</template>

<style scoped>

.inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 8rem;
}
.header {
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 12rem;
    width: 100%;
    margin: 4rem 0 4rem 0;
}

</style>
  