<script setup>
import { ref, computed } from 'vue'
import Checkmark from '@/assets/checkmark.svg'
import { rgb, hex, hsl } from '@/utils/color'

const modes = { hex, rgb, hsl }

const { swatches } = defineProps({
  swatches: {
    type: Array,
    required: true,
  },
})

const colorModes = ref(['hex', 'rgb', 'hsl'])
const activeSwatch = ref(0)
const activeMode = ref(0)

const activeCode = computed(() => {
  const mode = activeModeValue.value
  return modes[mode](activeColorValue.value)
})

const activeColorValue = computed(() => {
  const swatch = swatches[activeSwatch.value]
  return swatch
})

const activeModeValue = computed(() => {
  const mode = colorModes.value[activeMode.value]
  return mode
})
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
  <div class="color-modes">
    <button
      v-for="(mode, index) in colorModes"
      :key="index"
      class="color-mode"
      :class="[{ active: index === activeMode }, `color-mode-${mode}`]"
      @click="activeMode = index"
    >
      {{ mode }}
    </button>
  </div>

  <div class="color-code">{{ activeCode }}</div>
</template>

<style scoped></style>
