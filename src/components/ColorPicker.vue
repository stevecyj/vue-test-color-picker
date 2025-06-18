<script setup>
import { ref } from 'vue'
import Checkmark from '@/assets/checkmark.svg'

const { swatches } = defineProps({
  swatches: {
    type: Array,
    required: true,
  },
})

const activeSwatch = ref(0)
</script>

<template>
  <div>
    <div class="color-picker">
      <ul class="swatches">
        <li
          v-for="(swatch, index) in swatches"
          :key="index"
          :style="{ background: `#${swatch}` }"
          class="swatch"
          :class="{ active: index === activeSwatch }"
        >
          <Checkmark />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
