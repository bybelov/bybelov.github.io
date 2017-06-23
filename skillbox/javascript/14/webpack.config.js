const path = require('path');

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
          use: ExtractTextPlugin.extract(
            {
              loader: "style-loader",
              use: "css-loader"
            }
          )
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'build.css',
      allChunks: true
    })
  ]

};
