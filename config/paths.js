const path = require('path')

module.exports =
  { src:    path.resolve(__dirname, '../src')
  , build:  path.resolve(__dirname, '../dist')
  , static: path.resolve(__dirname, '../public')
  , config: path.resolve(__dirname)
  }
