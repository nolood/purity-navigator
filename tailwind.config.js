/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,jsx,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#3D3D3D",
        secondary: "#292929",
        selected: "#141414",
        disabled: "#F0F0F0",
        disabledText: "#ADADAD",
        white: "#FFFFFF",
        outline: "rgba(0, 0, 0, 0.16)",
        muted: "#F0F0F0",
        default: "#E6E6E6",
      },
    },
  },
  plugins: [],
};
