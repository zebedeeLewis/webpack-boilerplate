const paths = require('./paths')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports =
  merge( common
       , { mode                 : 'development'
         , devtool              : 'inline-source-map'
         , devServer            :
           { contentBase        : paths.build
           , open               : true
           , compress           : true
           , hot                : true
           , port               : 8000
           }

         , plugins: [ new webpack.HotModuleReplacementPlugin() ]
         , module:
           { rules:
             [ { test : /\.(scss|css)$/
               , use  :
                 [ 'style-loader'
                 , { loader  : 'css-loader'
                   , options : { sourceMap: true, importLoaders: 1 }
                   }
                 , { loader  : 'postcss-loader'
                   , options :
                     { sourceMap: true
                     , postcssOptions :
                       { config:
                         path.join(paths.config, 'postcss.config.js')
                       }
                     }
                   }
                 , { loader  : 'sass-loader'
                   , options : { sourceMap: true }
                   }
                 ]
               }
             ]
           }
         }
       )
