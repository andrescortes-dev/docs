const path = require("path");

module.exports = function webpackAliasPlugin() {
  return {
    name: "webpack-alias-plugin",
    configureWebpack() {
      return {
        resolve: {
          alias: {
            "@": path.resolve(__dirname, "../src"),
          },
        },
      };
    },
  };
};
