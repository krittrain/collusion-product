const { merge } = require("webpack-merge");
const config = require("./webpack.config");

module.exports = merge(config, {
  mode: "development",

  devServer: {
    port: 3000,
    open: true,
  },

  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
});
