/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        'sm': '600px',
        'md': '720px',
        'lg': '960px',
        'xl': '1220px',
        '2xl': '1380px',
      }
    },
    extend: {
      fontFamily: {
        cairo: "Cairo Variable , sans-serif",
        Poppins: "Poppins"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  darkMode: "class"
};
