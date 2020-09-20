const nodeExternals = require("webpack-node-externals");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    ],
  },
  target: "web",
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  mode: "development",
};
