<script setup lang="ts">
    import hero1 from '@/assets/hero1.jpg';
    import hero2 from '@/assets/hero2.jpg';
    import hero3 from '@/assets/hero3.jpg';
    import hero4 from '@/assets/hero4.jpg';
    import hero5 from '@/assets/hero5.jpg';
    import hero6 from '@/assets/hero6.jpg';

    import { ref, computed, onMounted, onUnmounted} from 'vue';

    const images = [hero1, hero2, hero3, hero4, hero5, hero6];
    const currentIndex = ref(0);
    const current = computed(() => images[currentIndex.value]);
    const next = computed(() => images[(currentIndex.value + 1) % images.length]);
    
    let interval: ReturnType<typeof setInterval> | null = null;
    onMounted(() => {
        interval = setInterval(() => {
            currentIndex.value = (currentIndex.value + 1) % images.length;
        }, 1000) 
    })
    onUnmounted(() => {
        interval && clearInterval(interval)
    });


    const props = defineProps({
        type: {
            type: String
        }
    });

    
  
</script>

<template>
    <section class="header" :style="{'background-image': 'url('+next+')'}">
        <div class="next"  :style="{'background-image': 'url('+current+')'}" />
        <div class="inner">
            <div class="signature" />
            <div class="date" :class="'date--' + type" />
        </div>
    </section>
</template>

<style scoped>
.header {
    width: 100vw;
    height: 90vh;
    background: url('../assets/hero1.jpg') center no-repeat;
    background-size:cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 10rem;
}

.inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: calc(100vw - 10rem);
    max-width: calc(100vw - 10rem); 
}



.signature {
    background: url('../assets/signature2.svg') left top no-repeat;
    background-size: contain;
    max-width: calc(100vw - 10rem);
    width: 40rem;
    height: 30rem;
    background-repeat: no-repeat;
}

.date {
    background: url('../assets/date_handwritten_67.svg') right top no-repeat;
    background-size: contain;
    max-width: calc(70vw - 10rem);
    width: 30rem;
    height: 10rem;
    
}

@media (max-width: 999px) {
  .inner {
    flex-direction: column; 
    height: calc(90vh - 10rem)
  }

  .signature {
    align-self: center;
  }

  .date {
    margin-bottom: 2rem;
    align-self: center;
    height: 5rem;
  }
}

.date.date--7 {
    background-image: url('../assets/date_handwritten_7.svg');
}
</style>

<style>
.header p {
    margin: auto;
    margin-top: 0rem;
    max-width: 35rem;
}
.header p.emphasize {
    margin: 2rem auto;
    font-size: 3rem;
    max-width: 35rem;

}
.header .countdown {
    margin-top: 5rem;
    margin-bottom: 5rem;
}
</style>
  