<script setup lang="ts">
  import { defineProps } from 'vue'

const props = defineProps({
    href: {
        type: String, required: true
    },
});
</script>

<template>
    <section class="rsvp">
        <div class="inner">
            <div class="box">
                <h1 class="sr-only">RSVP</h1>
                <a :href="href" target="_blank">Let us know if you can make it!</a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.box {
    max-width: 50rem;
    aspect-ratio: 1.8;
    background: url('../assets/rsvp_box.png') no-repeat center;
    background-size: contain;
    margin: 6rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

a, a:hover, a:active, a:visited {
    box-sizing: border-box;
    margin-top: 30%;
    padding-right: 1rem;
    text-decoration: none;
    display: block;
    width: 35rem;
    aspect-ratio: 5.24;
    background: url('../assets/rsvp_button.png') no-repeat center;
    background-size: contain;
    line-height: 7.5rem;
    text-align: center;
}

a:hover {
    background-image: url('../assets/rsvp_button_hover.png');
}

a:active {
    position: relative;
    left: 0.2rem;
    top: 0.2rem;
}

</style>
  