const { sources } = require("webpack");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");

module.exports = merge(config, {
  mode: "development",
  devtool : "source-map",
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: { disableDotRule: true },
  },

  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
});
