// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export const content = [
  // Add your content paths here
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {},
};
export const darkMode = "class";
export const plugins = [nextui()];