// @ts-check
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {Partial<import('tailwindcss/types/config').ThemeConfig>} */
const extend = {
  colors: {
    primary: {
      DEFAULT: "#7870e0",
      50: "#d7d4f6",
      100: "#c9c6f3",
      200: "#aea9ec",
      300: "#a19be9",
      400: "#938de6",
      500: "#7870e0",
      600: "#6c65ca",
      700: "#605ab3",
      800: "#544e9d",
      900: "#484386",
    },
    secondary: {
      DEFAULT: "#BA94F5",
      50: "#f1eafd",
      100: "#e3d4fb",
      200: "#ddcafa",
      300: "#cfb4f8",
      400: "#c19ff6",
      500: "#BA94F5",
      600: "#AE81F3",
      700: "#A26FF2",
      800: "#965CF0",
      900: "#8A49EE",
    },
    // https://www.tailwindshades.com/#color=155.62499999999997%2C29.090909090909093%2C78.43137254901961&step-up=4&step-down=9&hue-shift=0&name=jet-stream&base-stop=5&overrides=e30%3D
    variant: {
      DEFAULT: "#B8D8CB",
      50: "#F3F9F6",
      100: "#EDF5F2",
      200: "#E0EEE8",
      300: "#D2E6DE",
      400: "#C5DFD5",
      500: "#B8D8CB",
      600: "#9AC8B5",
      700: "#7DB7A0",
      800: "#5FA78A",
      900: "#4D8C72",
    },
    // https://www.tailwindshades.com/#color=61.192052980132445%2C86.28571428571426%2C65.68627450980392&step-up=6&step-down=10&hue-shift=-4&name=starship&base-stop=5&overrides=e30%3D
    highlight: {
      DEFAULT: "#F0F35C",
      50: "#FCFCDC",
      100: "#FBFBCE",
      200: "#F9F9B2",
      300: "#F7F795",
      400: "#F3F579",
      500: "#F0F35C",
      600: "#EAF02C",
      700: "#D2D910",
      800: "#A3AA0C",
      900: "#757A09",
    },
    coal: {
      DEFAULT: "#323945",
      50: "#d6d7da",
      100: "#adb0b5",
      200: "#84888f",
      300: "#5b616a",
      400: "#474d58",
      500: "#323945",
      600: "#2d333e",
      700: "#282e37",
      800: "#232830",
      900: "#14171c",
    },
    get cta() {
      return this.highlight;
    },
  },
  fontFamily: {
    ...defaultTheme.fontFamily,
    brand: ["Anonymous Pro", ...defaultTheme.fontFamily.mono],
    get secondary() {
      // TODO: Temporary
      return this.brand;
    },
  },
};

/** @type {Required<import('tailwindcss/types/config').PluginsConfig>} */
const plugins = [
  plugin(({ addBase }) => {
    // Anonymous Pro has only two weights, so we map Tailwind's font-weight
    // values to those (as we use almost values in app).
    const fontWeightsMapping = {
      400: ["thin", "extralight", "light", "normal"],
      700: ["medium", "semibold", "bold", "extrabold", "black"],
    };
    addBase(
      Object.fromEntries(
        Object.entries(fontWeightsMapping)
          .map(([weight, names]) => [names.map(name => [name, weight])])
          .flat(2)
          .map(([name, weight]) => [
            [`.font-brand .font-${name}`, `.font-brand.font-${name}`],
            { fontWeight: weight },
          ])
      )
    );
  }),
  plugin(({ addBase }) => {
    addBase({
      ".bf-primary-100": {
        "@apply bg-primary-100 text-coal-500": {},
      },
      ".bf-primary-200": {
        "@apply bg-primary-200 text-coal-900": {},
      },
      ".bf-primary-400": {
        "@apply bg-primary-400 text-coal-900": {},
      },
      ".bf-primary-500": {
        "@apply bg-primary-500 text-white": {}, // not very accessible, but black doesn't look right
      },
      ".bf-primary-600": {
        "@apply bg-primary-600 text-white": {},
      },
      ".bf-primary-700": {
        "@apply bg-primary-700 text-white": {},
      },
      ".bf-primary-900": {
        "@apply bg-primary-900 text-white": {},
      },
    });

    addBase({
      ".bf-secondary-100": {
        "@apply bg-secondary-100 text-coal-500": {},
      },
      ".bf-secondary-200": {
        "@apply bg-secondary-200 text-coal-700": {},
      },
      ".bf-secondary-400": {
        "@apply bg-secondary-400 text-coal-700": {},
      },
      ".bf-secondary-500": {
        "@apply bg-secondary-500 text-coal-700": {},
      },
      ".bf-secondary-600": {
        "@apply bg-secondary-600 text-coal-900": {},
      },
      ".bf-secondary-700": {
        "@apply bg-secondary-700 text-black": {},
      },
      ".bf-secondary-900": {
        "@apply bg-secondary-900 text-white": {},
      },
    });

    addBase({
      ".bf-variant-100": {
        "@apply bg-variant-100 text-coal-700": {},
      },
      ".bf-variant-200": {
        "@apply bg-variant-200 text-coal-700": {},
      },
      ".bf-variant-400": {
        "@apply bg-variant-400 text-coal-700": {},
      },
      ".bf-variant-500": {
        "@apply bg-variant-500 text-coal-700": {},
      },
      ".bf-variant-600": {
        "@apply bg-variant-600 text-coal-700": {},
      },
      ".bf-variant-700": {
        "@apply bg-variant-700 text-coal-900": {},
      },
      ".bf-variant-900": {
        "@apply bg-variant-900 text-coal-900": {},
      },
    });

    addBase({
      ".bf-highlight-100": {
        "@apply bg-highlight-100 text-coal-500": {},
      },
      ".bf-highlight-200": {
        "@apply bg-highlight-200 text-coal-500": {},
      },
      ".bf-highlight-400": {
        "@apply bg-highlight-400 text-coal-500": {},
      },
      ".bf-highlight-500": {
        "@apply bg-highlight-500 text-coal-500": {},
      },
      ".bf-highlight-600": {
        "@apply bg-highlight-600 text-coal-500": {},
      },
      ".bf-highlight-700": {
        "@apply bg-highlight-700 text-coal-500": {},
      },
      ".bf-highlight-900": {
        "@apply bg-highlight-900 text-white": {},
      },
    });

    addBase({
      ".bf-cta-100": {
        "@apply bg-cta-100 text-black": {},
      },
      ".bf-cta-200": {
        "@apply bg-cta-200 text-black": {},
      },
      ".bf-cta-400": {
        "@apply bg-cta-400 text-black": {},
      },
      ".bf-cta-500": {
        "@apply bg-cta-500 text-black": {},
      },
      ".bf-cta-600": {
        "@apply bg-cta-600 text-black": {},
      },
      ".bf-cta-700": {
        "@apply bg-cta-700 text-black": {},
      },
      ".bf-cta-900": {
        "@apply bg-cta-900 text-white": {},
      },
    });
  }),

  // branded text-color over white bg, with a goal of color contrast.
  plugin(({ addBase }) => {
    addBase({
      ".text-w-primary": {
        "@apply text-primary-700": {},
      },
      ".text-w-secondary": {
        "@apply text-secondary-900": {},
      },
      ".text-w-variant": {
        "@apply text-variant-900": {},
      },
    });
  }),

  plugin(({ addComponents }) => {
    addComponents({
      ".btn-cta": {
        "@apply bf-cta-500 border-3 border-black duration-300": {},
        transitionProperty: "background-color, color, border-color, box-shadow",
        boxShadow:
          "var(--shadow-width, 0.5rem) var(--shadow-width, 0.5rem) 0 0 black",
        "&:hover, &:focus": {
          boxShadow: "0 0 0 0 black",
          "@apply bg-black text-cta": {},
        },
        "&:focus": {
          "@apply outline-none ring-0": {},
        },
      },
    });
  }),
];

module.exports = { extend, plugins };
