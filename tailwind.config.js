/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#aefcbf',

          secondary: '#ffbadb',

          accent: '#de5eed',

          neutral: '#1a222d',

          'base-100': '#31404e',

          info: '#45bdde',

          success: '#55d894',

          warning: '#f9b858',

          error: '#f44e67',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
