const webpack = require('webpack');
const { parsed: localEnv } = require('dotenv').config();
const withSourceMaps = require('@zeit/next-source-maps');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

const rules = [
  {
    loader: 'postcss-loader',
    options: {
      config: {
        path: './postcss.config.js',
      },
    },
  },
];
const plugins = [
  withSourceMaps,
  withImages,
  [
    withBundleAnalyzer,
    {
      analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: 'static',
          reportFilename: '../server-analyze.html',
        },
        browser: {
          analyzerMode: 'static',
          reportFilename: 'client-analyze.html',
        },
      },
    },
  ],
  withCss({
    cssModules: true,
  }),
];

module.exports = withPlugins([...plugins], {
  webpack: (config, { dev, isServer }) => {
    const conf = config;
    conf.node = {
      fs: 'empty',
    };

    conf.module.rules.push(...rules);
    conf.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return conf;
  },
});
