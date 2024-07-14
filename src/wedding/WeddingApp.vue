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
      <p>are delighted to invite you to their wedding celebrations on</p>
      <p class="emphasize">6 + 7 September</p>
      <Countdown date="2024-09-06T13:00:00"/>
    </Header>
    <Hero />
    <Rsvp href="https://forms.gle/6vuXN2HctoesUpcMA"/>
    <Day bg-color="#FFEEC4" :header-img="imgDay1">
      <DaySection :img="imgClissoldHouse">
        <p><strong>1:30pm</strong> - Ceremony</p>
        <p>
          <em>The Drawing Room</em><br>
          Clissold House
        </p>
      </DaySection>
      <DaySection :img="imgDrinks">
        <p><strong>4:30pm</strong> - Reception</p>
        <p>
          <em>The Waterhouse Project</em><br>
          Bethnal Green
        </p>
      </DaySection>
      <DaySection :img="imgFood">
        <p>
          Dine and mingle til<br/>
          <strong>10:30pm</strong>
        </p>
      </DaySection>
    </Day>
    <Day bg-color="#D0E6FF" :header-img="imgDay2">
      <DayLocation line1="The Duke of Richmond" line2="Hackney" />
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
    <Rsvp href="https://forms.gle/6vuXN2HctoesUpcMA"/>
  </div>
</template>

<style scoped>
  .no-scroll {
    overflow: hidden;
  }
</style>
