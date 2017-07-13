const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const env = JSON.stringify(process.env.NODE_ENV) || 'development';
const __DEV__ = env === 'development';

const webpackConfig = {
  entry: './src/index.jsx',
  output: {
    path: `${__dirname}/dist`,
    filename: '[chunkhash].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
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
  }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

if (process.env.ANALYZE) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
