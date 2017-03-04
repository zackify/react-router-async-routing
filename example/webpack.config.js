const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  context: resolve(__dirname),

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ],

  performance: {
    hints: false
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-eval-cheap-source-map',

  devServer: {
    hot: true,
    host: '0.0.0.0',
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: {
      index: 'index.html'
    }
  }
};
