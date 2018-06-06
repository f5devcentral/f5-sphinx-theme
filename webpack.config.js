const path = require('path');

var config = {
  mode: 'production',
  entry: path.join(__dirname, '/react/main.js'),
  output: {
    path: path.join(__dirname, '/f5_sphinx_theme/static/js/'),
    filename: 'index.js'
  },
  devServer: {
    publicPath: 'http://localhost:8080/_static/js/',
    contentBase: path.join(__dirname, '/test/docs/_build/html'),
    host: '0.0.0.0',
    inline: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
module.exports = config;