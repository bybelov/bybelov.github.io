const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    build: './js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: '[name].js'
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
      },
      {
        test: /\.html$/, // Ищем html файлы
        use: "file-loader?name=[name].html&outputPath=../" // Копируем файлы в родителя папки js/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(
      {
        filename:  (getPath) => {
          return getPath('../css/[name].css').replace('css/js', 'css'); // Помещаем общий файл стилей в папку build/css/ под именем build.css
        },
        allChunks: true
      }
    )
  ]

};
