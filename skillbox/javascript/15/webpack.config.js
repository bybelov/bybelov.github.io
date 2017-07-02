const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js'
  },

  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // Исключаем папку /node_modules/
        use: ['babel-loader']
      }
    ]
  }
};
