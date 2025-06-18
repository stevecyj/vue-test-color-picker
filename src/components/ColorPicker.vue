<script setup>
import { ref, computed } from 'vue'
import convert from 'color-convert'
import Checkmark from '@/assets/checkmark.svg'

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
  switch (mode) {
    case 'hex':
      return hex.value
    case 'rgb':
      return rgb.value
    case 'hsl':
      return hsl.value
    default:
      return hex.value
  }
})

const activeColorValue = computed(() => {
  const swatch = swatches[activeSwatch.value]
  return swatch
})

const activeModeValue = computed(() => {
  const mode = colorModes.value[activeMode.value]
  return mode
})

const hex = computed(() => {
  return `#${activeColorValue.value}`
})

const rgb = computed(() => {
  const rgbColor = convert.hex.rgb(activeColorValue.value)
  return `${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}`
})

const hsl = computed(() => {
  const hslColor = convert.hex.hsl(activeColorValue.value)
  return `${hslColor[0]}°, ${hslColor[1]}%, ${hslColor[2]}%`
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
