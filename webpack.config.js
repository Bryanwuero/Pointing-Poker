var path = require('path')
module.exports = {
  mode: 'development',
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css|sass|less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader', options: { importLoaders: 1 }
          },
          {
            loader: 'sass-loader'
          },
          {
            loader: 'less-loader', options: { javascriptEnabled: true }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true
        }
      },
      {
        test: /\.sass$/,
        include: path.join(__dirname, 'src'),
        loaders: ['style-loader', { loader: 'css-loader', options: { modules: true } }, 'sass-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.less$/,
        include: path.join(__dirname, 'src'),
        loaders: ['style-loader', { loader: 'css-loader', options: { modules: true } }, 'less-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ['file-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true
  }
}
