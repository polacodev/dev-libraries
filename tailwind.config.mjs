/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      // 'red': '#dc2626', 									// testing
      'paragraph-link': '#1d4ed8', // text-blue-700	used
      transparent: 'transparent', // used

      //LIGHT
      'light-paragraph': '#1f1f29', // used
      'light-title': '#1F2E05', // used
      'green-light-primary': '#9ccc16', // used
      'green-light-secondary': '#E5f99d', // used
      'light-primary': '#f9fafb', // text-gray-50 used
      'light-secondary': '#ffffff', // white used
      'light-border': '#d1d5db', // text-gray-300 used

      //DARK
      'dark-paragraph': '#e5e7eb', // text-gray-200	used
      'green-dark-primary': '#BAE635', // used
      'dark-primary': '#111827', // text-gray-900	used
      'dark-secondary': '#1f2937', // text-gray-800 used
      'dark-tertiary': '#374151', // text-gray-700 used
      'dark-border': '#4b5563', // text-gray-600 used
      'dark-subtitle': '#9ca3af', // text-gray-400 used
      'dark-home-card': '#4B4B4B', // used
    },
    extend: {},
  },
  plugins: [],
};
