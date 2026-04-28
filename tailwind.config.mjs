/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1a1a1a',
          soft: '#3a3a3a',
          muted: '#6b6b6b',
        },
        paper: {
          DEFAULT: '#fafaf7',
          warm: '#f4f1ea',
        },
        accent: {
          earth: '#8a7355',
          sage: '#9caa90',
        },
      },
      fontFamily: {
        sans: ['"Zen Kaku Gothic New"', '"Noto Sans JP"', 'system-ui', 'sans-serif'],
        display: ['"Klee One"', '"Zen Kaku Gothic New"', '"Noto Sans JP"', 'serif'],
        en: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        logo: ['Futura', '"Futura PT"', 'Jost', 'system-ui', 'sans-serif'],
      },
      aspectRatio: {
        '4/5': '4 / 5',
        '3/2': '3 / 2',
        '5/4': '5 / 4',
      },
      maxWidth: {
        prose: '64rem',
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
};
