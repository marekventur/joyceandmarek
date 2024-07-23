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
  import imgClissoldHouse from '@/assets/clissold_house.png'
  import imgDay2 from '@/assets/day2.svg'
  

  import { ref } from 'vue';


  
</script>

<template>
  <div>
    <Header type="67" />
    <DuoResponsive>
      <Pullquote />
      <Location type="clissold" color="#FFD876">
        <LocationSection title="<em>Ceremony</em><strong>Clissold House</strong>" address="Stoke Newington Church St, London N16 9HJ" link="https://maps.app.goo.gl/NXKTeuqBngMU2DX16" />
        <LocationSection title="<em>Reception</em><strong>The Waterhouse Project</strong>" address="1 Corbridge Cres, Cambridge Heath, London E2 9DT" link="https://maps.app.goo.gl/26wLmrvgnyuAwyra7" />
        <LocationSection title="<em>Cocktail party</em><strong>The Duke of Richmond</strong>" address="316 Queensbridge Road, Hackney, London, E8 3NZ" link="https://maps.app.goo.gl/pqJo8ioyEe3suU9UA" />
        
      </Location>
    </DuoResponsive>
    <Day>
      <DayGroup>
        <DaySection :img="imgClissoldHouse" time="1:30 PM">
          <em>Ceremony</em><br />
          at The Drawing Room<br />
          Clissold House
        </DaySection>
        <DaySection :img="imgDrinks" time="4:30 PM">
          <em>Reception</em><br />
          at The Waterhouse Project<br />
          Bethnal Green
        </DaySection>
        <DaySection :img="imgFood"  time="til 10:30 PM">
          Dine and mingle
        </DaySection>
      </DayGroup>
    </Day>
    <Day :headerImg="imgDay2">
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
          Dine and mingle<br/>
          through the night
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
