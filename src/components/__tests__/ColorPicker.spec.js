import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import convert from 'color-convert'
import ColorPicker from '../ColorPicker.vue'

let wrapper = null

const propsData = {
  swatches: ['e3342f', '3490dc', 'f6993f', '38c172', 'fff'],
}

beforeEach(() => {
  wrapper = shallowMount(ColorPicker, { propsData })
})
afterEach(() => {
  wrapper.unmount()
})

describe('ColorPicker', () => {
  describe('Swatches', () => {
    it('displays each color as an individual swatch', () => {
      const swatches = wrapper.findAll('.swatch')
      propsData.swatches.forEach((swatch, index) => {
        expect(swatches.at(index).attributes().style).toBe(
          `background: rgb(${convert.hex.rgb(swatch).join(', ')});`,
        )
      })
    })
    it('sets the first swatch as the selected one by default', () => {
      const firstSwatch = wrapper.findAll('.swatch').at(0)
      expect(firstSwatch.classes()).toContain('active')
    })
  })
})
