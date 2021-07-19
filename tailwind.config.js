module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme_dark: "#5192e1",
        theme_light: "#23ced5",
        dark: "#26313C",
        bgGray: "#F6F7F8",
      },
      height: {
        lg: "400px",
      },
      backgroundImage: (theme) => ({
        banner1:
          "linear-gradient(to right, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4) 50%),url('/src/images/banner1-4.jpg')",
        banner2:
          "linear-gradient(to right, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4) 50%),url('/src/images/banner1-5.jpg')",
        banner3:
          "linear-gradient(to right, rgba(0,0,0,0.4) , rgba(0,0,0,0.4) ),url('/src/images/banner1-6.jpg')",
        parallaxBnr:
          "linear-gradient(to bottom, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4) 50%),url('/src/images/parallaxBG.jpg')",
        parallaxBnr2:
          "linear-gradient(to bottom, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4) 50%),url('/src/images/testimonial-bg.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      textColor: ["group-hover"],
      fontWeight: ["group-hover"],
      scale: ["group-hover"],
      transform: ["group-hover"],
    },
  },
  plugins: [],
};

// #23ced5, #5192e1
