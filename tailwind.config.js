module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "relative",
    "bottom-20",
    "bottom-10",
    "border-b-2",
    "border-gray-200",
    "border-solid",
    "bg-white",
    // {
    //   pattern: /./, // disable purging
    // },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
