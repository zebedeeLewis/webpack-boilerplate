const { merge } = require('webpack-merge')
const coreConfig = require('./webpack.core.js')
const path = require('path')
const ProjectStructure = require('./ProjectStructure')
const webpack = require('webpack')



const devServer =
  { contentBase : ProjectStructure.BUILD_DIR
  , publicPath  : '/testPublicPath'
  , open        : true
  , compress    : true
  , hot         : true
  , port        : 8000
  }



const plugins = [ new webpack.HotModuleReplacementPlugin() ]



const devConfig =
  { devtool: 'inline-source-map'
  , devServer
  , plugins
  }



module.exports = merge(coreConfig, devConfig)
