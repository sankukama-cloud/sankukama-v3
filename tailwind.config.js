/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        offwhite: '#FAFAFA',
        parchemin: '#F5F2EB',
        anthracite: '#1A1A1A',
        mauve: {
          DEFAULT: '#6B3A7D',
          50: '#F4EEF7',
          100: '#E7D9EE',
          200: '#CFB4DC',
          300: '#B78EC9',
          400: '#9862AF',
          500: '#6B3A7D',
          600: '#5A3069',
          700: '#472654',
          800: '#341C3E',
          900: '#241429',
        },
        lime: {
          DEFAULT: '#D4E157',
          soft: '#E4EE8F',
          deep: '#AEBB3B',
        },
        navy: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
          500: '#0F172A',
        },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'Georgia', 'serif'],
        lora: ['Lora', 'Georgia', 'serif'],
        sans: ['"Public Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        card: '0 4px 24px -8px rgba(26, 26, 26, 0.12)',
        cardHover: '0 20px 48px -12px rgba(26, 26, 26, 0.22)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
