const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const ENV = JSON.stringify(process.env.NODE_ENV) || 'development';
const BRAND = process.env.npm_package_config_BRAND || 'default';
const TARGET_DEVICE = process.env.TARGET_DEVICE || 'desktop';
const __DEV__ = ENV === 'development';

function pathMatches(source, target) {
  return path.normalize(source).indexOf(path.normalize(path.join(__dirname, target))) >= 0;
}

const targetBundleName = '[chunkhash].[device].bundle.js'.replace('[device]', TARGET_DEVICE);

const webpackConfig = {
  entry: './src/index.jsx',
  output: {
    path: `${__dirname}/dist`,
    filename: targetBundleName,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
            },
          },
          {
            loader: 'preprocess-loader',
            options: {
              BRAND,
              DEVICE: TARGET_DEVICE,
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
        include: [path.join(__dirname, 'src')],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          }, {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.join(__dirname, 'src'),
              ],
            },
          }, {
            loader: 'preprocess-loader',
            options: {
              BRAND,
              DEVICE: TARGET_DEVICE,
            },
          },
        ],
        include: function include(pathCandidate) {
          return pathMatches(pathCandidate, 'src') && !pathMatches(pathCandidate, `src/styles/${BRAND}`);
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
        include: path.join(__dirname, `src/styles/${BRAND}`),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      APP_DEFAULT_LOCALE: JSON.stringify(process.env.LOCALE) || '\'pl\'',
      APP_DEV: ENV === 'development',
      APP_TARGET_DEVICE: JSON.stringify(process.env.TARGET_DEVICE),
    }),
    new ExtractTextPlugin('[chunkhash].vendor.css'),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

if (TARGET_DEVICE === 'desktop') {
  webpackConfig.plugins.unshift(new HtmlPlugin({
    title: 'App',
    template: 'src/index.html',
    inject: 'body',
  }));
} else if (TARGET_DEVICE === 'mobile') {
  webpackConfig.plugins.unshift(new HtmlPlugin({
    title: 'App',
    template: 'src/mobile.html',
    filename: 'mobile.html',
    inject: 'body',
  }));
}

if (process.env.ANALYZE) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
