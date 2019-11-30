module.exports = {
  transform: {
    // use babel-jest@23 for babel@6 support (https://github.com/facebook/jest/issues/8230#issuecomment-479470547)
    '\\.js$': require.resolve('babel-jest')
  }
}
