const path = require('path')
const webpack = require('webpack')

const DIRECTORY = path.join(__dirname)

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, './src')
  },
  entry: [
    'babel-regenerator-runtime',
    path.join(__dirname, './index.web.js')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          // cacheDirectory: true,
          presets: [ 'es2015', 'react', 'stage-1', 'react-hmre']
        }
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader',
        query: { cacheDirectory: true }
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'web'),
    publicPath: '/web/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      'react-native-svg': __dirname + '/src/web-svg',
    }
  }
}
