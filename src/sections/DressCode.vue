<script setup lang="ts">
</script>

<template>
    <section class="dress-code">
        <div class="header" />
        <div class="box">
            <h2>Cocktail attire</h2>
            <p>We would love to celebrate the day with a splash of colour. We would love to see you all in colours that bring you joy and share with us!</p>
            <p>If you are looking for some colour inspirations, some corals/pinks/yellows or lilac and blues are all lovely choices for the day.</p>
        </div>
        <div class="palette" />
    </section>
</template>

<style scoped>
.dress-code {
    box-sizing: border-box;
    max-width: 100vw;
    width: 90rem;
    display: flex;
    flex-direction: column;
    padding: 5rem;
}
.header {
    height: 10rem;
    width: 100%;
    background:url('../assets/dress_code.svg') center no-repeat;
    background-size: contain;
    max-width: calc(100vw - 6rem);
    margin-bottom: 5rem;
}

.box {
    width: 25rem;
    text-align: left;
    font-size: 1.4rem;
}
p, h2 {
    margin-bottom: 2rem;
}

h2 {
    font-family: "mrs-eaves-roman-small-caps", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.8rem;
}

.palette {
    height: 10rem;
    width: 100%;
    background:url('../assets/colour_palette.png') center no-repeat;
    background-size: contain;
    max-width: calc(100vw - 6rem);
    margin-top: 5rem;
}

@media (max-width: 999px) {
    .dress-code {
        align-items: flex-start;
    }
    .header, .palette{
        background-position: left center;
    }

    .box, .palette {
        margin-left: 20vw;
        width: 50vw;
    }

    .palette {
        margin-top: 2rem;
        height: 7rem;
    }
}

</style>
  