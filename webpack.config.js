const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const textPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    main: './app'
  },
  context: path.resolve(__dirname, 'src'),
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
          options: { presets: ['env', 'react'] }
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
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    port: 9090,
    hot: true
  }
};
