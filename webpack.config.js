const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
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
  })],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
