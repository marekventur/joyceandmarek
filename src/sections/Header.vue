<script setup lang="ts">
  
</script>

<template>
    <section class="header">
        <div class="inner">
            <div class="getting-married" />
            <div class="signature" />
            <slot />
        </div>
    </section>
</template>

<style scoped>
.header {
    text-align: center;
}
.getting-married {
    background: url('../assets/getting_married.png') no-repeat center;
    background-size: contain;
    max-width: 35rem;
    width: 50rem;
    aspect-ratio: 2.38;
    margin: 8rem auto 4rem auto;
}
.signature {
    background: url('../assets/signature_wide.svg') no-repeat center;
    background-size: contain;
    max-width: 35rem;
    width: 50rem;
    aspect-ratio: 5;
    margin: 0 auto 3rem auto;
}

.header .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
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
  