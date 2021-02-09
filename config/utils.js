const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')

// Get Entry Points
exports.getEntry = function () {
  return {
    'index': paths.entry + `/index.js`
  }
}

// Get HTML file
exports.getHtml = function () {
  return [
    new HtmlWebpackPlugin({
      favicon: paths.assets + '/images/favicon.ico',
      filename: `index.html`,
      template: paths.entry + `/index.html`,
      inject: true,
      chunks: ['runtime', 'index'],
      minify: true,
    })
  ]
}
