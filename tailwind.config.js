/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // ----------- Theme 1 -----------
        keypadBackground: "hsl(223, 31%, 20%)",
        screenBackground: "hsl(224, 36%, 15%)",
        keyBackground: "hsl(225, 21%, 49%)",
        keyShadow: "hsl(224, 28%, 35%)",
        toggleBackground: "hsl(6, 63%, 50%)",
        redKeyBackground: "hsl(6, 63%, 50%)",
        redKeyShadow: "hsl(6, 70%, 34%)",
        lightGrayishOrange: "hsl(30, 25%, 89%)",
        grayishOrange: "hsl(28, 16%, 65%)",
        textGrayishBlue: "hsl(221, 14%, 31%)",

        theme2: {
          mainBackground2: "hsl(0, 0%, 90%)",
          keypadBackground2: "hsl(0, 5%, 81%)",
          screenBackground2: "hsl(0, 0%, 93%)",

          keyBackground2: "hsl(185, 42%, 37%)",
          keyShadow2: "hsl(185, 58%, 25%)",
          keyToggle2: "hsl(25, 98%, 40%)",
          keyToggleShadow2: "hsl(25, 99%, 27%)",
          keyText2: "hsl(60, 10%, 19%)",
          text2: "hsl(0, 0%, 100%)",
        },
        theme3: {
          mainBackground3: "hsl(268, 75%, 9%)",
          keypadBackground3: "hsl(268, 71%, 12%)",
          keyBackground3: "hsl(281, 89%, 26%)",
          keyShadow3: "hsl(285, 91%, 52%)",
          keyToggle3: "hsl(176, 100%, 44%)",
          keyToggleShadow3: "hsl(177, 92%, 70%)",
          veryDarkVioletKeyBg: "hsl(268, 47%, 21%)",
          darkMagentaKeyBg: "hsl(290, 70%, 36%)",
          keyText3: "hsl(52, 100%, 62%)",
          text3: "hsl(0, 0%, 100%)",
          veryDarkBlue: "hsl(198, 20%, 13%)",
        },
        // //----------- Theme 2 -----------
        // lightGrayMainBg: "hsl(0, 0%, 90%)",
        // grayishRedKeypadBg: "hsl(0, 5%, 81%)",
        // veryLightGrayScreenBg: "hsl(0, 0%, 93%)",

        // // --- Keys ---
        // darkMoferateCyan: "hsl(185, 42%, 37%)",
        // veryDarkCyand: "hsl(185, 58%, 25%)",
        // orangeKeyBg: "hsl(25, 98%, 40%)",
        // orangeKeyShadow: "hsl(25, 99%, 27%)",
        // lightGrayishYellow: "hsl(45, 7%, 89%)",
        // darkGraiyshYellow: "hsl(35, 11%, 61%)",

        // //  ---- Text ----
        // veryGrayishYellow: "hsl(60, 10%, 19%)",

        // // ----------- Theme 3 -----------
        // darkVioletKeyBg: "hsl(281, 89%, 26%)",
        // vividMegentaKeyBg: "hsl(285, 91%, 52%)",
        // pureCyanKeyBg: "hsl(176, 100%, 44%)",
        // softCyanKeyShadow: "hsl(177, 92%, 70%)",
        // veryDarkVioletKeyBg: "hsl(268, 47%, 21%)",
        // darkMagentaKeyBg: "hsl(290, 70%, 36%)",

        // // --- Text ---
        // lightYellow: "hsl(52, 100%, 62%)",
        // veryDarkBlue: "hsl(198, 20%, 13%)",
      },
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
    },
    plugins: [],
  },
};
