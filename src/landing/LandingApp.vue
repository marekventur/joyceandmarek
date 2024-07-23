<script setup lang="ts">
  import Header from "../sections/Header.vue";
  import Pullquote from "../sections/Pullquote.vue";
  import DuoResponsive from "../sections/DuoResponsive.vue";
  import Location from "../sections/Location.vue";
  import Day from "../sections/Day.vue";
  import DayLocation from "@/sections/DayLocation.vue";
  import DayGroup from "../sections/DayGroup.vue";
  import DaySection from "../sections/DaySection.vue";
  import LocationSection from "../sections/LocationSection.vue";
  import StickyHeader from "../sections/StickyHeader.vue";
  import Gifts from "../sections/Gifts.vue";
  import GiftsImage from "../sections/GiftsImage.vue";
  import Footer from "../sections/Footer.vue";
  import DressCode from "@/sections/DressCode.vue";
  import DressCodeImage from "@/sections/DressCodeImage.vue";

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
  

  
</script>

<template>
  <div>
    <Header type="7" />
    <DuoResponsive>
      <Pullquote />
      <Location  type="pub" color="#C8E2FF">
        <LocationSection title="<strong>The Duke of Richmond</strong>" address="316 Queensbridge Road, Hackney, London, E8 3NZ" link="https://maps.app.goo.gl/pqJo8ioyEe3suU9UA" />
        <div class="box"><i>
          Closest station: Dalston Junction on Overground, about 10 minutes walk.<br>
          Nearby bus: No. 236
        </i></div>
      </Location>
    </DuoResponsive>
    <Day>
      <DayGroup>
        <DaySection :img="imgPub" time="3:30 PM">
          Door opens<br />
          Welcome drinks
        </DaySection>
        <DaySection :img="imgCake" time="5:00 PM">
          Speeches<br />
          Cake cutting
        </DaySection>
        <DaySection :img="imgPartyFood"  time="6:00 PM">
          Party food + Drinks
        </DaySection>
        <DaySection :img="imgDance"  time="9:00 PM" time2="til midnight">
          Dance the night away
        </DaySection> 
      </DayGroup>
    </Day>
    <DuoResponsive reverse>
      <DressCode />
      <DressCodeImage />
    </DuoResponsive>
    <DuoResponsive desktopTopMargin>
      <GiftsImage />
      <Gifts />
    </DuoResponsive>
    <Footer />
    <StickyHeader href="https://forms.gle/JKuy77s5jZ1oFrT86" />
    
  </div>
</template>

<style scoped>
 
</style>
