<script setup lang="ts">
  import Header from "../sections/Header.vue";
  import Hero from "../sections/Hero.vue";
  import Rsvp from "../sections/Rsvp.vue";
  import Day from "../sections/Day.vue";
  import DayLocation from "../sections/DayLocation.vue";
  import DaySection from "../sections/DaySection.vue";
  import Details from "../sections/Details.vue";
  import RedPocket from "../sections/RedPocket.vue";
  import Countdown from "../sections/Countdown.vue";

  import imgCake from '@/assets/cake.png'
  import imgPartyFood from '@/assets/party_food.png'
  import imgDance from '@/assets/dance.png'
  import imgPub from '@/assets/pub.png'
  import imgFood from '@/assets/food.png'
  import imgDrinks from '@/assets/drinks.png'
  import imgDay1 from '@/assets/day1.png'
  import imgDay2 from '@/assets/day2.png'
  import imgClissoldHouse from '@/assets/clissold_house.png'

  import { ref } from 'vue';

  const isRedPocketOpen = ref(false);

  const setRedPocket = (state:boolean) => {
    isRedPocketOpen.value = state;
    document.body.style.overflow = state?'hidden':'auto';
  };
</script>

<template>
  <div :class="{ 'no-scroll': isRedPocketOpen }">
    <RedPocket :is-open="isRedPocketOpen" @close="setRedPocket(false)"/>
    <Header>
      <p>are delighted to invite you to their wedding party on the</p>
      <p class="emphasize">7th September</p>
      <p>at</p>
      <p class="emphasize"><a href="https://maps.app.goo.gl/68mDd2FRxBikWNKv8">The Duke of Richmond</a>, Hackney</p>
      <Countdown date="2024-09-07T15:30:00"/>
    </Header>
    <Hero />
    <Rsvp href="https://forms.gle/JKuy77s5jZ1oFrT86" />
    
    <Day bg-color="#BDECE4">
      <DaySection :img="imgPub">
        <p><strong>3:30pm</strong></p>
        <p> 
          Door opens<br />
          Welcome drinks
        </p>
      </DaySection>
      <DaySection :img="imgCake">
        <p><strong>5:00pm</strong></p>
        <p> 
          Speeches<br />
          Cake cutting
        </p>
      </DaySection>
      <DaySection :img="imgPartyFood">
        <p><strong>6:00pm</strong></p>
        <p> 
          Party food + Drinks
        </p>
      </DaySection>
      <DaySection :img="imgDance">
        <p><strong>9:00pm til midnight</strong></p>
        <p> 
          Dance the night away
        </p>
      </DaySection>
    </Day>
    <Details @gift="setRedPocket(true)" />
  </div>
</template>

<style scoped>
 .no-scroll {
    overflow: hidden;
  }
</style>
