module.exports = {
  devServer: {
    overlay: false,
    port: process.env.VUE_APP_PORT || 8080,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/style.scss";`,
      },
    },
  },
};
