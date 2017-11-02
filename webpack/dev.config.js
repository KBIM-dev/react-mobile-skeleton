const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/index',
  ],

  output: {
    publicPath: '/dist/',
  },

  module: {
    preLoaders: [
      {
        test: /\.js|\.jsx$/,
        loader: 'eslint-loader',
        exclude: ['node_modules']
      }
    ],

    loaders: [
      { test: /\.scss$|\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!postcss-loader")},
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
      __DEVELOPMENT__: true,
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
    }),
  ],
};