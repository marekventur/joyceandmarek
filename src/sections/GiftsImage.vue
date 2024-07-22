<script setup lang="ts">
</script>

<template>
    <section class="gifts-image">
        <div class="inner" />
    </section>
</template>

<style>
.gifts-image .inner {
    width: 100rem;
    background: url('../assets/gift_img_desktop.jpg') center no-repeat;
    background-size: contain;
    aspect-ratio: 1;
    max-height: 70rem;
}

@media (max-width: 999px) {
  .gifts-image .inner {
    background-image: url('../assets/gift_img_mobile.jpg');
    aspect-ratio: 1.4;
    max-height: 40rem;
    margin: 0 2rem;
  }
}
</style>
  