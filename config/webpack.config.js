'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = function (webpackEnv) {
  return {
    entry: './src/index.js',
    output: {
      path: process.cwd()+'/build',
    },
    module: {
      rules: [
        // Babel with JSX
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react'
              ]
            }
          }
        },
        //CSS
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        //ASSETS
        {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
          type: "asset",
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: 'public/index.html'
      }),
    ],
  }
};
