const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: `./src/${process.env.BANNER}/scripts.js`,
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: './dist',
  //   hot: true,
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            // // you can specify a publicPath here
            // // by default it use publicPath in webpackOptions.output
            // publicPath: '../',
            // },
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: `./src/${process.env.BANNER}/index.html`, to: `./`},
      {from: `./src/${process.env.BANNER}/`, test: /(\.png|\.jpg|\.gif)$/, to: `./`, ignore: ['*.js', '*.html', '*.css']},
    ]),
    new CleanWebpackPlugin([`dist/${process.env.BANNER}`]),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new webpack.DefinePlugin({
      'process.env.ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: !(process.env.NODE_ENV === 'production'), // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, `dist/${process.env.BANNER}`),
  },
};
