const path = require('path')
const ProjectStructure = require('./ProjectStructure')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ConfigSupport = require('./webpack.support.js')



const mode = process.env.NODE_ENV



const entry =
  ConfigSupport.entries_from_page_descriptors
    ( ProjectStructure.pageDescriptors
    )



const output =
  { filename   : path.join('js', '[name].js')
  , path       : ProjectStructure.DIST_DIR
  , publicPath :
      ( process.env.NODE_ENV === 'development' 
        ? ProjectStructure.DEV_PUBLIC_PATH
        : ProjectStructure.PROD_PUBLIC_PATH
      )
  , environment:
      { arrowFunction : false
      , bigIntLiteral : false
      , const         : false
      , destructuring : false
      , dynamicImport : false
      , forOf         : false
      , module        : false
      }
  }



const webpackModule =
  { rules:
      [ { test : /\.(handlebars|html)$/i
        , use  :
            [ { loader  : 'handlebars-loader'
              , options :
                  { extensions   : ['.html', '.handlebars']
                  , rootRelative : ProjectStructure.SRC_DIR
                  , partialDirs  : [ProjectStructure.SRC_DIR]
                  , helperDirs   : [ProjectStructure.HANDLEBARS_DIR]
                  , knownHelpers : ['shell']
                  }
              }
            ]
        }


      , { test      : /\.m?js$/i
        , exclude   : /(node_modules|bower_components)/
        , use       :
            { loader  : 'babel-loader'
            , options :
                { exclude: 
                    // \\ for Windows, \/ for Mac OS and Linux
                    [ /node_modules[\\\/]core-js/
                    , /node_modules[\\\/]webpack[\\\/]buildin/
                    ]
                }
            }
        }


      , { test: /\.(png|svg|jpg|jpeg|gif)$/i
        , type: 'asset/resource'
        , generator :
            { filename: path.join('images', '[name][ext]')
            }
        }


      , { test: /\.(woff|woff2|eot|ttf|otf)$/i
        , type: 'asset/resource'
        , generator :
            { filename: path.join('fonts', '[name][ext]')
            }
        }
      ]
  }



const plugins =
  [ new CleanWebpackPlugin()
  , ... ConfigSupport.html_webpack_plugins
          ( ProjectStructure.pageDescriptors
          )
  ]



const resolve =
  { extensions : ['.js', '.css']
  }



module.exports =
  { mode
  , entry
  , output
  , module : webpackModule
  , plugins
  , resolve
  }
