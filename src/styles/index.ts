import { createStitches } from "@stitches/react";

export const {
  config,
  css,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  media: {
    sm: "(max-width: 640px)",
    md: "(max-width: 768px)",
    lg: "(max-width: 1024px)",
  },
  theme: {
    colors: {
      rocketseat: "#8257e6",
      gray900: "#121214",
      gray800: "#202024",
      gray700: "#323238",
      gray600: "#7c7c8a",
      gray500: "#8d8d99",
      gray300: "#c4c4cc",
      gray200: "#e1e1e6",
      gray100: "#eaedf2",

      green500: "#00875f",
      green300: "#00b37e",

      white: "#fff",
    },
    fontSizes: {
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
  },
});
