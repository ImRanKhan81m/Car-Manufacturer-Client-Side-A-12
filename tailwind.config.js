module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF2D37",
          secondary: "#f3f4f6",
          accent: "#FFEDD5",
          neutral: "#F3F4F6",
          "base-100": "#ffffff",
          info: "#777",
          success: "#FFA500",
          warning: "#DF7E07",
          error: "#FA5C5C",
          black: "#333333",
          third: "#FFA500"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
