<script setup lang="ts">
</script>

<template>
    <section class="gifts">
        <div class="header" />
        <div class="box">
            <p>We are just so grateful that you can join us on our special day. Your company is the only gift we need. </p>
            <p>If you wish to give, a contribution to our honeymoon would be appreciated. You may use the following monzo link below.</p>
        </div>
        <a class="button" target="_blank" href="https://monzo.me/yanyeeli">Monzo.me link</a>
    </section>
</template>

<style scoped>
.gifts {
    box-sizing: border-box;
    max-width: 100vw;
    width: 75rem;
    display: flex;
    flex-direction: column;
    padding: 5rem;
    align-items: flex-start;
    padding-left: 0rem;
}
.header {
    height: 10rem;
    width: 100%;
    background:url('../assets/gift.svg') left center no-repeat;
    background-size: contain;
    max-width: calc(100vw - 6rem);
    margin-bottom: 5rem;
}

.box {
    text-align: left;
    font-size: 1.8rem;
    line-height: 2.4rem;
    margin-bottom: 5rem;
    max-width: 30rem;
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

.button {
    font-size: 1.8rem;
    display: block;
    padding: 1.5rem 4rem;
    border: 1px solid black;
    text-decoration: none;
}


@media (max-width: 999px) {
    .gifts {
        align-items: flex-start;
        padding: 5rem;
    }
    .header {
        background-position: left center;
    }

    .box {
        margin-left: 20vw;
        max-width: 50vw;
        margin-bottom: 2rem;
    }

    .button {
        margin-left: 20vw;
        
    }
}

</style>
  