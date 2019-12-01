module.exports = {
  entry: './src/index.js',
  output: {
    path: './build',
    filename: 'index.js',
    library: 'trimCanvas',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/, loader: 'babel-loader', query: {presets: ['es2015']}
    }]
  }
}
