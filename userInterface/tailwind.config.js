import { addDynamicIconSelectors } from '@iconify/tailwind';
import flowbite from "flowbite-react/tailwind"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        'Fira': ["Fira Sans Condensed","sans-serif"],
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),

    flowbite.plugin(),
  ],
}

