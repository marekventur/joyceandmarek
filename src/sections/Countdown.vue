
<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  const targetDate = ref(new Date('2024-09-06T13:00:00'))
  const days = ref(0)
  const hours = ref(0)
  const minutes = ref(0)
  const seconds = ref(0)
  let timer: number | undefined = undefined

  const startCountdown = () => {
    const fn = () => {
      const now = new Date().getTime()
      const distance = targetDate.value.getTime() - now

      days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
      hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
    };
    setInterval(fn, 1000);
    fn();
  }

  onMounted(() => {
    startCountdown()
  })

  onBeforeUnmount(() => {
    clearInterval(timer)
  })
</script>

<template>
    <div class="countdown-container">
        <div class="countdown"><div class="number number--days">{{ days }}</div> Days</div>
        <div class="countdown"><div class="number number--days">{{ hours }}</div> Hours</div>
        <div class="countdown"><div class="number number--days">{{ minutes }}</div> Minutes</div>
        <div class="countdown"><div class="number number--days">{{ seconds }}</div> Seconds</div>
    </div>
</template>

<style>
.countdown-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    max-width: 40rem;
    margin: auto;
}

.countdown {
    min-width: 6rem;
    margin: 0 1rem;
    display: block;
    text-align: center;
    flex-basis: 1;
    font-size: 2rem;
}
.countdown .number {
    font-size: 3rem;
    display: block;
}
</style>
  