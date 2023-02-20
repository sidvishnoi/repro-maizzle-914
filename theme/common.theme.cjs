// @ts-check
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {Partial<import('tailwindcss/types/config').ThemeConfig>} */
const extend = {
  width: {
    '19/20': '95%',
  },
  fontSize: {
    ...defaultTheme.fontSize,
    '5xl': ['3rem', { lineHeight: '1.2' }],
    '6xl': ['3.75rem', { lineHeight: '1.2' }],
    '7xl': ['4.5rem', { lineHeight: '1.2' }],
  },
  borderWidth: {
    ...defaultTheme.borderWidth,
    3: '3px',
  },
  colors: {
    success: {
      DEFAULT: '#4DBD86',
      50: '#E4F5EC',
      100: '#D3EFE1',
      200: '#CAEBDA',
      300: '#90D6B4',
      400: '#6EC99D',
      500: '#4DBD86',
      600: '#39996A',
      700: '#2A704E',
      800: '#1A4731',
      900: '#153827',
    },
    error: colors.red,
    warn: colors.yellow,
    info: colors.blue,
  },
  animation: {
    shake: 'shake 0.2s',
    shimmer: 'shimmer 1s ease-out infinite',
  },
  keyframes: {
    shake: {
      '0%, 20%, 40%, 50%, 70%, 90%, 100%': {
        transform: 'translateX(5px)',
      },
      '10%, 30%, 60%, 80%': {
        transform: 'translateX(-5px)',
      },
    },
    shimmer: {
      '100%': {
        transform: 'translateX(0%)',
        opacity: '0',
      },
    },
  },
};

module.exports = {
  extend,
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        '.underline-primary-500': {
          'text-decoration-color': theme('colors.variant.DEFAULT'),
        },
        '.underline-cta-500': {
          'text-decoration-color': theme('colors.cta.DEFAULT'),
        },
        '.underline-thicker': {
          'text-decoration-thickness': '2px',
        },
      });
    }),
    plugin(({ addBase }) => {
      // bf- means background-foreground
      addBase({
        '.bf-coal-100': {
          '@apply bg-coal-100 text-black': {},
        },
        '.bf-coal-200': {
          '@apply bg-coal-200 text-white': {},
        },
        '.bf-coal-400': {
          '@apply bg-coal-400 text-white': {},
        },
        '.bf-coal-500': {
          '@apply bg-coal-500 text-white': {},
        },
        '.bf-coal-600': {
          '@apply bg-coal-600 text-white': {},
        },
        '.bf-coal-700': {
          '@apply bg-coal-700 text-white': {},
        },
        '.bf-coal-900': {
          '@apply bg-coal-900 text-white': {},
        },
      });

      addBase({
        '.bf-gray-100': {
          '@apply bg-gray-100 text-black': {},
        },
        '.bf-gray-200': {
          '@apply bg-gray-200 text-black': {},
        },
        '.bf-gray-400': {
          '@apply bg-gray-400 text-gray-900': {},
        },
        '.bf-gray-500': {
          '@apply bg-gray-500 text-white': {},
        },
        '.bf-gray-600': {
          '@apply bg-gray-600 text-white': {},
        },
        '.bf-gray-700': {
          '@apply bg-gray-700 text-white': {},
        },
        '.bf-gray-900': {
          '@apply bg-gray-900 text-white': {},
        },
      });

      addBase({
        '.bf-black': {
          '@apply bg-black text-white': {},
        },
      });
    }),

    plugin(({ addComponents }) => {
      addComponents({
        '.btn-highlight': {
          '@apply bf-highlight-500 border-2 border-highlight transition-colors':
            {},
          '&:hover, &:focus': {
            '@apply border-highlight-700 bf-highlight-600': {},
          },
          '&:focus': {
            '@apply outline-none ring-0': {},
          },
        },
      });
    }),
  ],
};
