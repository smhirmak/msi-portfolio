/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-light': 'var(--bg-light)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        card: 'var(--card)',
        'card-light': 'var(--card-light)',
        button: 'var(--button)',
        white: 'var(--white)',
        black: 'var(--black)',
        'icons-hover': 'var(--icons-hover)',
      },
      zIndex: {
        1: '1',
        999: '999',
      },
      clipPath: {
        'polygon-[0_0,100%_0,100%_100%,30%_98%,0_100%]': 'polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)',
      },
    },
  },
  plugins: [],
}

