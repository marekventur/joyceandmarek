import Header from "../sections/Header.vue";
<script setup lang="ts">
  import Countdown from "./Countdown.vue";
</script>

<template>
    <section class="header">
        <div class="inner">
            <div class="getting-married" />
            <div class="signature" />
            <div class="text">are delighted to invite you to their wedding celebrations on</div>
            <div class="text text--strong">6 + 7 September</div>
            <div class="countdown">
                <Countdown />
            </div>
        </div>
    </section>
</template>

<style scoped>
.getting-married {
    background: url('../assets/getting_married.png') no-repeat center;
    background-size: contain;
    max-width: 50rem;
    width: 50rem;
    aspect-ratio: 2.38;
    margin: 8rem auto 4rem auto;
}
.signature {
    background: url('../assets/signature_wide.svg') no-repeat center;
    background-size: contain;
    max-width: 50rem;
    width: 50rem;
    aspect-ratio: 5;
    margin: 0 auto 3rem auto;
}
.text {
    margin-top: 3rem;
    max-width: 50rem;
}
.text--strong {
    margin-top: 2rem;
    font-size: 4rem;
    max-width: 50rem;

}
.countdown {
    margin-top: 10rem;
    margin-bottom: 8rem;
}
.inner {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
  