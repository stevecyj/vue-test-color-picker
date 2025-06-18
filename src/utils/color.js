import convert from 'color-convert'

export const rgb = (color) => {
  return convert.hex.rgb(color).join(', ')
}

export const hex = (color) => {
  return `#${color}`
}

export const hsl = (color) => {
  const hslColor = convert.hex.hsl(color)
  return `${hslColor[0]}°, ${hslColor[1]}%, ${hslColor[2]}%`
}
