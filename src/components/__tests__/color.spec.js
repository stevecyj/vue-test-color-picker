import { describe, it, expect } from 'vitest'
import { rgb, hex, hsl } from '@/utils/color'

const color = 'e3342f'

describe('color', () => {
  it('returns the color into RGB notation', () => {
    expect(rgb(color)).toBe('227, 52, 47')
  })

  it('returns the color into hexadecimal notation', () => {
    expect(hex(color)).toBe('#e3342f')
  })

  it('returns the color into HSL notation', () => {
    expect(hsl(color)).toBe('2°, 76%, 54%')
  })
})
