const { merge } = require('webpack-merge');
const HtmlWelpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8083,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWelpackPlugin({
      template: './public/index.html'
    })  
  ],
  entry: {
    review: './src/index.js',
    reviewWithContainer: './src/indexWithContainer.js'
  },
  output: {
    filename: '[name].bundle.js',
  }
}

module.exports = merge(commonConfig, devConfig);

