const { merge } = require('webpack-merge')
const ProjectStructure = require('./ProjectStructure')
const coreConfig = require('./webpack.core.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')



const webpackModule =
  { rules:
      [ { test: /\.s?css$/i
        , use:
            [ MiniCssExtractPlugin.loader
            , 'css-loader'
            , { loader  : 'postcss-loader'
              , options : 
                  { postcssOptions :
                    { config: ProjectStructure.POST_CSS_CONFIG_PATH
                    }
                  }
              }
            , 'sass-loader'
            ]
        }
      ]
  }



const plugins =
  [ new MiniCssExtractPlugin
      ( { filename : path.join('css', '[name].css')
        }
      )
  ]



const prodConfig =
  { module: webpackModule
  , plugins
  }



module.exports = merge(coreConfig, prodConfig)
