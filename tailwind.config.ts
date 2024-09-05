import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        black: '#000000',
        neutral: '#404040',
        gray: 'rgb(169,169,169)',
        white: '#FFFFFF',
      },
      zinc: {
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        500: '#71717a',
        800: '#27272a',
      },
      error: {
        500: '#ef4444',
      },
    },
    extend: {
      width: {
        inputOne: '500px',
        forTest: '370px',
      },
      maxWidth: {
        inputOne: '500px'
      },
      height: {
        forTest: '400px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
