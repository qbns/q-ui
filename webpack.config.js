const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

const env = JSON.stringify(process.env.NODE_ENV) || 'development';
const brand = process.env.BRAND || 'default';
const __DEV__ = env === 'development';

function pathMatches(source, target) {
  return path.normalize(source).indexOf(path.normalize(path.join(__dirname, target))) >= 0;
}

const webpackConfig = {
  entry: './src/index.jsx',
  output: {
    path: `${__dirname}/dist`,
    filename: '[chunkhash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'preprocess-loader',
            options: {
              BRAND: brand,
            },
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
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
            loader: 'postcss-loader',
            options: {
              postcss: [
                autoprefixer({
                  browsers: [
                    'last 3 version',
                    'ie >= 10',
                  ],
                }),
              ],
            },
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
              BRAND: brand,
            },
          },
        ],
        include: function include(pathCandidate) {
          return pathMatches(pathCandidate, 'src') && !pathMatches(pathCandidate, `src/styles/${brand}`);
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
        include: path.join(__dirname, `src/styles/${brand}`),
      },
    ],
  },
  plugins: [new HtmlPlugin({
    title: 'App',
    template: 'src/index.html', // Load a custom template
    inject: 'body', // Inject all scripts into the body
  }),
  new webpack.DefinePlugin({
    APP_DEFAULT_LOCALE: JSON.stringify(process.env.LOCALE) || '\'pl\'',
    APP_DEV: env === 'development',
  }),
  new ExtractTextPlugin('[chunkhash].vendor.css'),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

if (process.env.ANALYZE) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
