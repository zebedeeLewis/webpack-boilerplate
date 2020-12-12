const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackSupport = require('./webpack.support.js')
const buildConfig = require('./build.config.js')


const mode = process.env.NODE_ENV



const entry
  = { index : buildConfig.Src.Page.HomeJsPath
    }



const entriesMetadata
  = { index :
        { title : 'Home'
        }
    }



const output
  = { filename   : path.join('js', '[name].js')
    , path       : buildConfig.Dist.Root
    , publicPath :
        ( process.env.NODE_ENV === 'development' 
            ? buildConfig.Build.DevPublicPath
            : buildConfig.Build.ProdPublicPath
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



const webpackModule
  = { rules:
        [ { test : /\.template\.html$/i
          , use  :
              [ { loader: 'html-loader'
                , options: { preprocessor: webpackSupport.preprocessor }
                }
              ]
          }

        , { test      : /\.m?js$/i
          , exclude   : /(node_modules|bower_components)/
          , use       :
              { loader  : 'babel-loader'
              , options :
                  { exclude: 
                      [ /node_modules[\\\/]core-js/
                      , /node_modules[\\\/]webpack[\\\/]buildin/
                      ]
                  }
              }
          }

        , { test: /\.(png|svg|jpg|jpeg|gif)$/i
          , type: 'asset/resource'
          , generator :
              { filename: path.join
                            ( 'images'
                            , '[name]-[contenthash][ext]'
                            )
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



const plugins
  = [ new CleanWebpackPlugin()
    , ... Object.entries(entry).map
            ( ([entryName, entryPath]) => {
                return (
                  webpackSupport.html_webpack_plugin_from_entry
                    ( entriesMetadata[entryName]
                    , entryName
                    , entryPath
                    )
                )
              }
            )
    ]



const resolve
  = { extensions : ['.js', '.mjs', '.css', 'scss']
    , alias      :
        { component : buildConfig.Src.Component.Root
        , lib       : buildConfig.Src.LibDir
        , pages     : buildConfig.Src.Page.Root
        }
    }



module.exports
  = { mode
    , entry
    , output
    , module : webpackModule
    , plugins
    , resolve
    }
