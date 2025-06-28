import defaultTheme from "tailwindcss/defaultTheme";

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
