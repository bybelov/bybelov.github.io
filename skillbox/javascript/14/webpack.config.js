const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: 'build.js'
  },

  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // Исключаем папку /node_modules/
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename:  (getPath) => {
        return getPath('../css/build.css').replace('css/js', 'css'); // Помещаем общий файл стилей в папку build/css/ под именем build.css
      },
      allChunks: true
    })
  ]

};
