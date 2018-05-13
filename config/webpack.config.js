const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const textPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const images = ['jpg', 'jpeg', 'png', 'gif', 'svg'];

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'redux', 'react-redux', 'redux-saga', 'babel-polyfill'],
    main: './app'
  },
  context: path.resolve(__dirname, '../src'),
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-0'],
            plugins: ['transform-regenerator']
          }
        }
      },

      {
        test: /\.s?css$/,
        use: textPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['src'],
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },

  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),

    new webpack.ProvidePlugin({
      React: 'react',
      Component: ['react', 'Component']
    }),

    new textPlugin({
      filename: 'main.css',
      allChunks: true
    }),

    new CopyWebpackPlugin([
      ...images.map(ext => ({ from: `**/*/*.${ext}`, to: 'images/[name].[ext]' }))
    ])
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    port: 9090,
    hot: true
  }
};
