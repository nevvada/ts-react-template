const path = require('path');

const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'src'),
    historyApiFallback: true,
    hot: true,
    port: 8000,
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});
