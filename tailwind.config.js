import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  extend: ["plugin:tailwindcss/recommended"],
  settings: {
    tailwindcss: {
      callees: ["twMerge", "createTheme"],
      classRegex: "^(class(Name)|theme)?$",
    },
  },
  theme: {
    screens: {
      mobile: "390px",
      desktop: "1120px",
    },
    extend: {
      colors: {
        customYellow: "#F8E356",
        customRed: "#FF4F8B",
        customPink: "#E3B1F6",
        customGreen: "#D3F5CF",
        customBlue: "#A8DBFA",
        CustomBlue_2: "#635EE2",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
