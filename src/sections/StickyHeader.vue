<script setup lang="ts">
    import { defineProps, ref, onMounted, onUnmounted } from 'vue';

    const props = defineProps({
        href: {
            type: String,
            required: true,
        }
    });

    const isVisible = ref(false)

    const handleScroll = () => {
        isVisible.value = window.scrollY > 300;
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    });
</script>

<template>
    <section class="sticky-header" :class="{'sticky-header--is-visible': isVisible}">
        <div class="inner">
            <div class="signature" />
            <a :href="href" target="_blank">RSVP</a>
        </div>
    </section>
</template>

<style scoped>

.sticky-header {
    position: fixed;
    left: 2rem;
    right: 2rem;
    top: 2rem;
    z-index: 100;
    transition: opacity 0.3s;
    opacity: 0;
    align-items: flex-start;
}

.sticky-header--is-visible {
    opacity: 1;
}

.inner {
    position: relative;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}

a {
    position: absolute;
    right: 2rem;
    top: 0;
    text-decoration: none;
    display: block;
    background: 1px solid black;
    background: white;
    color: black;
    font-size: 1.8rem;
    display: inline-block;
    padding: 1.5rem 4rem;
    border: 1px solid black;
    text-decoration: none;
    top: -10rem;
    transition: top 0.3s, background-color 0.3s, color 0.3s;

    font-family: "mrs-eaves-roman-all-small-ca", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
}

a:hover, a:active {
    background: black;
    color: white;
}

.sticky-header--is-visible a {
   top: 0rem;
}

.signature {
    position: absolute;
    right: 0;
    top: 0;
    width: 5rem;
    height: 30rem;
    background: url('../assets/signature_sticky.svg') top center no-repeat;
    background-size: contain;
    left: -5rem;
    transition: left 0.3s;
}

.sticky-header--is-visible .signature {
   left: 0rem;
}
</style>
  