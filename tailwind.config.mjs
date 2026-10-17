/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: {
          neutral: '#FAF0E8',
          dark: '#000000',
          light: '#FFFFFF',
        },
        accent: {
          primary: '#9B6830',
          secondary: '#B6956E',
        },
        slate: {
          muted: '#778698',
        },
      },
      fontFamily: {
        serif: ['"Bodoni Moda SC"', 'Bodoni Moda', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.35em',
      },
    },
  },
  plugins: [],
};
