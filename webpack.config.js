const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpg|jpeg|gif)$/i, type: 'asset/resource' },
      { test: /\.js$/i, exclude: /node_modules/, use: 'babel-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  devServer: {
    static: './dist',
    hot: true,
    open: true,
  },
  mode: 'development',
};
