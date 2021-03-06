const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('@babel/register');

const config = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      // template: path.join(__dirname, 'src/index.template.html'),
      filename: path.join(__dirname, 'src/index.template.html'),
      hash: true
    }),
  ],
  resolve: {
    modules: [path.resolve('./src'), path.resolve('./node_modules')]
  },
  devServer: {
    contentBase: __dirname + '/public',
    compress: true,
    port: 3000,
    inline: true,
    hot: true,
    open: true,
    stats: {
      // assets: false,
      // children: false,
      // chunks: false,
      // chunkModules: false,
      // colors: true,
      // entrypoints: false,
      // hash: false,
      // modules: false,
      // timings: false,
      // version: false
    }
  },
  watch: false,
  devtool: 'source-map'
};

module.exports = config;
