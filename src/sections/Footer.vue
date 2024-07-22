<script setup lang="ts">
</script>

<template>
    <section class="footer-image">
    </section>
</template>

<style>
.footer-image {
    margin-top: 10rem;
    width: 100vw;
    background: url('../assets/footer_desktop.jpg') top center no-repeat;
    background-size: cover;
    height: 70rem;
    max-width: 100vw;
}

@media (max-width: 999px) {
  .footer-image {
    margin-top: 3rem;
    background-image: url('../assets/footer_mobile.jpg');
    aspect-ratio: 1;
    height: auto;
  }
}
</style>
  