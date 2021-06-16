const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = function (webpackEnv) {
  return {
    entry: './src/index.js',
    output: {
      path: process.cwd() + '/build',
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
              presets: ["@babel/preset-env", ["@babel/preset-react", {
                runtime: "automatic"
              }]]
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
      new ModuleFederationPlugin(
        {
          name: 'Container',
          filename:
            'remoteEntry.js',
        }
      ),
      new HtmlWebpackPlugin({
        inject: true,
        template: 'public/index.html'
      }),
    ],
  }
};
