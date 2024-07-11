<template>
    <div class="countdown-container">
        <div class="countdown"><div class="number number--days">{{ days }}</div> Days</div>
        <div class="countdown"><div class="number number--days">{{ hours }}</div> Hours</div>
        <div class="countdown"><div class="number number--days">{{ minutes }}</div> Minutes</div>
        <div class="countdown"><div class="number number--days">{{ seconds }}</div> Seconds</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        targetDate: new Date('2024-09-06T13:00:00'),
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        timer: null
    };
  },
  mounted() {
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      this.timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = this.targetDate.getTime() - now;

        if (distance < 0) {
          clearInterval(this.timer);
          this.days = this.hours = this.minutes = this.seconds = 0;
        } else {
          this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
          this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        }
      }, 1000);
    }
  },
  beforeUnmount() {
    clearInterval(this.timer);
  }
}
</script>

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
  