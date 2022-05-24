const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ROOT_DIR = join(__dirname, "../../");

module.exports = {
  entry: ["react-hot-loader/patch", "./src"],

  output: {
    filename: "bundle.kritika.js",
    path: join(ROOT_DIR, "dist"),
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: join(ROOT_DIR, "internals", "template", "index.template.html"),
      inject: "body",
      scriptLoading: "blocking",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
      },

      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },

      {
        test: /\.svg$/,
        issuer: /\.jsx$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
};
