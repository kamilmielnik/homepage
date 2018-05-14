const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (webpackWizard, { resolveCwdPath }) => {
  const webpackConfig = webpackWizard({
    input: {
      favicon: resolveCwdPath('html/favicon-v4.ico'),
      html: resolveCwdPath('html/index.html'),
      modules: [
        resolveCwdPath('src'),
        resolveCwdPath('src/pages')
      ]
    }
  });

  webpackConfig.node = {
    constants: false
  };

  if (process.env.ANALYZE_BUNDLE) {
    webpackConfig.plugins.push(new BundleAnalyzerPlugin());
  }

  return webpackConfig;
};
