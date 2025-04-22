import type {Config} from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}', "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      screens: {
        // PC (1200px 이상)
        pc: '1200px',
        // Tablet (745px 이상 ~ 1199px 이하)
        tablet: '745px',
        // Mobile (375px 이상 ~ 744px 이하)
      },
      keyframes: {
        spark1: {
          "0%, 100%": { transform: "rotate(10deg) scale(0.5)", opacity: "0" },
          "50%": { transform: "rotate(5deg) scale(1)", opacity: "1" },
        },
        spark2: {
          "0%, 100%": { transform: "rotate(-10deg) scale(0.5)", opacity: "0" },
          "50%": { transform: "rotate(-5deg) scale(1)", opacity: "1" },
        },
      },
      animation: {
        spark1: "spark1 1s ease-in-out infinite",
        spark2: "spark2 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
