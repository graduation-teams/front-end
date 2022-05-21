const {
    override,
    overrideDevServer,
    watchAll,
    useBabelRc
  } = require("customize-cra");
  const path = require("path");
  
  module.exports = {
    webpack: override(useBabelRc()),
    devServer: overrideDevServer(watchAll()),
  }