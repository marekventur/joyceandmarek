<script setup lang="ts">
  import Header from "../sections/Header.vue";
  import Hero from "../sections/Hero.vue";
  import Rsvp from "../sections/Rsvp.vue";
  import Day from "../sections/Day.vue";
  import DayLocation from "../sections/DayLocation.vue";
  import DaySection from "../sections/DaySection.vue";
  import Details from "../sections/Details.vue";
</script>

<template>
  <Header />
  <Hero />
  <Rsvp />
  <Day bg-color="#FFEEC4" header-img="day1.png">
    <DaySection img="clissold_house.png">
      <p><strong>1:30pm</strong> - Ceremony</p>
      <p>
        <em>The Drawing Room</em><br>
        Clissold House
      </p>
    </DaySection>
    <DaySection img="drinks.png">
      <p><strong>4:30pm</strong> - Reception</p>
      <p>
        <em>The Waterhouse Project</em><br>
         Bethnal Green
      </p>
    </DaySection>
    <DaySection img="food.png">
      <p>
        Dine and mingle til<br/>
        <strong>10:30pm</strong>
      </p>
    </DaySection>
  </Day>
  <Day bg-color="#D0E6FF" header-img="day2.png">
    <DayLocation line1="The Duke of Richmond" line2="Hackney" />
    <DaySection img="pub.png">
      <p><strong>3:30pm</strong></p>
      <p> 
        Door opens<br />
        Welcome drinks
      </p>
    </DaySection>
    <DaySection img="cake.png">
      <p><strong>5:00pm</strong></p>
      <p> 
        Speeches<br />
        Cake cutting
      </p>
    </DaySection>
    <DaySection img="party_food.png">
      <p><strong>6:00pm</strong></p>
      <p> 
        Party food + Drinks
      </p>
    </DaySection>
    <DaySection img="dance.png">
      <p><strong>9:00pm til midnight</strong></p>
      <p> 
        Dance the night away
      </p>
    </DaySection>
  </Day>
  <Details />
  <Rsvp />
</template>

<style scoped>

</style>
