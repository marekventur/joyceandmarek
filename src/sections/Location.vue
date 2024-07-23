<script setup lang="ts">
    const props = defineProps({

        type: {
            type: String,
        },
        color: {
            type: String,
        },

    });
</script>

<template>
    <section class="location">
        
        <div class="bg" :style="{'backgroundColor': color}">
            <div class="inner">
                <div class="header" />
                <slot />
            </div>
            <div class="image" :class="'image--'+type" />
        </div>
    </section>
</template>

<style scoped>
.location {
    width: 100%;
    min-height: 100vh;
    padding-top: 5rem;
    position: relative;
}
.inner {
    position: absolute;
    z-index: 2;
    left: 5rem;
    top: 10%;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
}



.header {
    height: 5rem;
    flex: 0 0 auto;
    width: 100%;
    background:url('../assets/location_handwritten.svg') left center no-repeat;
    background-size: contain;
    margin-bottom: 1rem;
    max-width: calc(100vw - 6rem);
}
p {
    margin-bottom: 1rem;
}

em {
    font-weight: bold;
}

i {
    font-style: italic;
}

.image {
    position: absolute;
    z-index: 1;
    background:url('../assets/pub_hero.jpg') center no-repeat;
    background-size: cover;
    right: 0;
    top: 30%;
    bottom: 15%;
    aspect-ratio: 0.80;
}

.image.image--clissold {
    background-image: url('../assets/pub_hero.jpg');
}

.bg {
    background-color: #C8E2FF;
    position: absolute;
    top: 5rem;
    left: 0;
    bottom: 0;
    right: 5rem;
}

@media (max-width: 999px) {
    .bg {
        right: 0;
    }
}
</style>
  

<style>
.location .box {
    margin-top: 1rem;
    background: white;
    padding: 2rem;
    text-align: left;
    font-size: 1.8rem;
    line-height: 2.4rem;
    width: 50%;
    max-width: 30rem;
}
</style>