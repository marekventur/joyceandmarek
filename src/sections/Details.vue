import Header from "../sections/Header.vue";
<script setup lang="ts">
  import Countdown from "./Countdown.vue";
</script>

<template>
    <section class="details">
        <div class="inner">
            <div class="header header--gifts" />
            <p>We are grateful that you can join us on our special day. Your company is the only gift we need. However, if you wish to give, a contribution to our honeymoon would be greatly appreciated.</p>
            <div class="header header--dress-code" />
            <p><strong>COCKTAIL ATTIRE</strong></p>
            <p>We kindly request cocktail attire with a splash of colour. Your elegant and vibrant presence will make our celebration even more joyous.</p>
        </div>
    </section>
</template>

<style scoped>

.details {
    margin-bottom: 4rem;
}

.header {
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 12rem;
    width: 100%;
    margin: 8rem 0 2rem 0;
}
.header--gifts {
    background-image: url('../assets/gifts.png')
}
.header--dress-code {
    background-image: url('../assets/dress_code.png')
}
p {
    width: 30rem;
    margin: 0.5rem auto;

}
</style>
  