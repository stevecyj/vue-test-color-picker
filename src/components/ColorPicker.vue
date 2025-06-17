<script setup>
const props = defineProps({
  swatches: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div>
    <div class="color-picker">
      <ul class="swatches">
        <li
          v-for="(swatch, index) in swatches"
          :key="index"
          class="swatch"
          :style="{ background: `#${swatch}` }"
        ></li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
