const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')

const webpackCore = require('./webpack.core.js')
const buildConfig = require('./build.config.js')



const webpackModule =
  { rules:
      [ { test: /\.s?css$/i
        , use:
            [ 'style-loader'

            , { loader  : 'css-loader'
              , options : { sourceMap: true }
              }

            , { loader  : 'postcss-loader'
              , options : 
                  { sourceMap      : true
                  , postcssOptions :
                    { config: buildConfig.Build.PostCssConfigPath
                    }
                  }
              }

            , { loader  : 'resolve-url-loader'
              , options : { sourceMap : true}
              }

            , { loader  : 'sass-loader'
              , options : {sourceMap : true}
              }
            ]
        }
      ]
  }



const devServer =
  { contentBase : buildConfig.Dist.Root
  , publicPath  : buildConfig.Build.DevPublicPath
  , openPage    :
      path.relative
        ('/'
        , path.join(buildConfig.Build.DevPublicPath, 'index.html')
        )
  , open        : true
  , hot         : true
  , port        : 8000
  }



const plugins = [ new webpack.HotModuleReplacementPlugin() ]



const devConfig =
  { devtool: 'inline-source-map'
  , module: webpackModule
  , devServer
  , plugins
  }



module.exports = merge(webpackCore, devConfig)
