<script setup lang="ts">
    import { defineProps } from 'vue'

    const props = defineProps({
        headerImg: {
            type: String
        }
    });
  
</script>

<template>
    <section class="day" :class="{'day--day2': (!!headerImg)}">
        <div class="inner">
            <div class="header" :style="{'backgroundImage': headerImg ? ('url('+headerImg+')') : ''}"  />
            <slot />
        </div>
    </section>
</template>

<style scoped>
.day {
    margin-top: 5rem;
}

.day.day--day2 {
    margin-top: 0;
}

.header {
    height: 10rem;
    width: 100%;
    background:url('../assets/ootd_desktop.svg') center no-repeat;
    background-size: contain;
    max-width: calc(100vw - 6rem);
    margin-bottom: 10rem;

    width: 100%;
    margin: 4rem 0 10rem 0;
}

.day--day2 .header {
    height: 10rem;
}

@media (max-width: 999px) {
    .day {
        margin-top: 0;
    }
    .header {
        background-image: url('../assets/ootd_mobile.svg');
        height: 15rem;
        margin-bottom: 5rem;
    }

    .day--day2 .header {
        height: 10rem;
    }
}

.inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 8rem;
}
.header {
    
}

</style>
  