module.exports = {
  entry: './index.es6',
  output: {
    path: './build',
    filename: 'index.js',
    library: 'trimCanvas',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.es6$/, loader: 'babel-loader', query: {presets: ['es2015']}
    }]
  }
}
