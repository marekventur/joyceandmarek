<script setup lang="ts">
    const props = defineProps({
        reverse: {
            type: Boolean,
        },
        desktopTopMargin: {
            type: Boolean,
        }
    });
</script>

<template>
    <div class="duo-responsive" :class="{'duo-responsive--reverse': reverse, 'duo-responsive--desktop-top-margin': desktopTopMargin}">
        <slot />
    </div>
</template>

<style scoped>
.duo-responsive {
    max-width: 100rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    align-items: stretch;
}

.duo-responsive > * {
    flex-basis: 1;
    max-width: 50%;
}

.duo-responsive--desktop-top-margin {
    margin-top: 10rem;
}
@media (max-width: 999px) {
  .duo-responsive {
    flex-direction: column;
    align-items: center
  }
  .duo-responsive > * {
    max-width: 100%;
  }
  .duo-responsive--reverse {
    flex-direction: column-reverse;
  }
  .duo-responsive--desktop-top-margin {
    margin-top: 0;
}
}
</style>
  