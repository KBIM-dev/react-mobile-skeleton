const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
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
        NODE_ENV: '"production"',
      },
      __DEVELOPMENT__: false,
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true,
      },
    }),
  ],
};
