<script setup lang="ts">
  import Header from "../sections/Header.vue";
  import Pullquote from "../sections/Pullquote.vue";
  import DuoResponsive from "../sections/DuoResponsive.vue";
  import Location from "../sections/Location.vue";
  import Day from "../sections/Day.vue";
  import DayLocation from "@/sections/DayLocation.vue";
  import DayGroup from "../sections/DayGroup.vue";
  import DaySection from "../sections/DaySection.vue";
  import LocationSection from "@/sections/LocationSection.vue";
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
    <Header type="67" />
    <DuoResponsive>
      <Pullquote />
      <Location type="clissold" color="#FFD876">
        <LocationSection title="Ceremony<br/>Clissold House" address="Stoke Newington Church St, London N16 9HJ" link="https://maps.app.goo.gl/NXKTeuqBngMU2DX16" />
        <LocationSection title="Dinner<br/>The Waterhouse Project" address="1 Corbridge Cres, Cambridge Heath, London E2 9DT" link="https://maps.app.goo.gl/26wLmrvgnyuAwyra7" />
        <LocationSection title="The Duke of Richmond" address="316 Queensbridge Road, Hackney, London, E8 3NZ" link="https://maps.app.goo.gl/pqJo8ioyEe3suU9UA" />
        
      </Location>
    </DuoResponsive>
    <Day>
      <DayGroup>
        <DaySection :img="imgClissoldHouse" time="1:30 PM">
          Ceremony<br />
          The Drawing Room<br />
          Clissold House
        </DaySection>
        <DaySection :img="imgDrinks" time="4:30 PM">
          Reception<br />
          The Waterhouse Project<br />
          Bethnal Green
        </DaySection>
        <DaySection :img="imgFood"  time="til 10:30 PM">
          Dine and mingle
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
    <StickyHeader href="https://forms.gle/6vuXN2HctoesUpcMA" />
    
  </div>
</template>

<style scoped>
 
</style>
