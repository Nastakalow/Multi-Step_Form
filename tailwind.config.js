/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sidebar-bg": "url('assets/images/bg-sidebar-desktop.svg')",
        "arcade-icon": "url('assets/images/icon-arcade.svg')",
        "advanced-icon": "url('assets/images/icon-advanced.svg')",
        "pro-icon": "url('assets/images/icon-pro.svg')",
        "thank-you-icon": "url('assets/images/icon-thank-you.svg')",
      },
    },
    colors: {
      "marine-blue": "hsl(214, 94%, 18%)",
      "marine-blue-hover": "hsl(214, 72%, 32%)",
      "purplish-blue": "hsl(243, 100%, 62%)",
      "purplish-blue-hover": "hsl(243, 100%, 69%)",
      "pastel-blue": "hsl(228, 100%, 84%)",
      "light-blue": "hsl(215, 100%, 97%)",
      "strawberry-red": "hsl(354, 84%, 57%)",

      "cool-gray": "hsl(231, 11%, 63%)",
      "light-gray": "hsl(229, 24%, 87%)",
      magnolia: "hsl(217, 100%, 97%)",
      alabaster: "hsl(231, 100%, 99%)",
      white: "hsl(0, 0%, 100%)",

      visited: "hsl(300, 100%, 25%)",
    },
    fontFamily: {
      "Ubuntu-Bold": ["Ubuntu-Bold", "sans-serif"],
      "Ubuntu-Medium": ["Ubuntu-Medium", "sans-serif"],
      "Ubuntu-Regular": ["Ubuntu-Regular", "sans-serif"],
    },
  },
  plugins: [],
};
