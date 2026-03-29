/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'klang-cream': '#f9f7eb',
        'klang-green': '#1f4c34',
        'klang-sage': '#6b7d6d',
      },
      fontFamily: {
        'sans': ['Mulish', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
