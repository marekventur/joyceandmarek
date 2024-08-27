<template>
  <div class="a4-page">
    <div v-for="i in 21" :key="i" class="card">
      <h2>Join Team {{ (i % 2 === 0) ? 'Groom' : 'Bride' }}!</h2>
      <qrcode-vue :value="generateUniqueUrl((i % 2 === 0) ? 'g' : 'b')" :size="80" level="M"></qrcode-vue>
    </div>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  components: {
    QrcodeVue
  },
  methods: {
    generateUniqueUrl(prefix) {
      const randomDigits = Math.floor(10000000 + Math.random() * 90000000);
      return `https://joyceandmarek.com/pub/#${prefix}${randomDigits}`;
    }
  }
}
</script>

<style scoped>
.a4-page {

  display: flex;
  flex-wrap: wrap;
}

.card {
  width: calc(200mm / 3 - 20mm / 3);
  height: calc(297mm / 7 - 20mm / 5);
  border: 1px solid #000;
  border-left: none;
  border-top: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Arial, sans-serif;
}

h2 {
  font-size: 16px;
  margin-bottom: 10px;
}

@media print {
  body {
    margin: 0;
    padding: 0;
  }

  .a4-page {
    page-break-after: always;
  }
}
</style>