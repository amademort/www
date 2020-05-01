
// Documentation on: https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-lincoln/src/index.js

import Typography from "typography"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.5,
  googleFonts: [
     {
       name: "Unica One",
       styles: ["400", "400i", "700"],
     },
    {
      name: "Oranienbaum",
      styles: ["400", "400i", "700"],
    },
    {
      name: "Major Mono Display",
      styles: ["100", "400", "400i", "700"],
    },
  ],
  headerFontFamily: [
    "Unica One",
    "sans-serif"],
  bodyFontFamily: [
    "Major Mono Display", 
    "Courier New",
    "Courier",
    "monospace"],
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
})

export const { scale, rhythm, options } = typography
export default typography
