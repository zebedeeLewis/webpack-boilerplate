const path = require('path')
const ProjectStructure = require('./ProjectStructure')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')



const mode = process.env.NODE_ENV



const entry =
  { index: path.join(ProjectStructure.SRC_DIR, 'index.js')
  }



const output =
  { filename: '[name].bundle.js'
  , path: ProjectStructure.BUILD_DIR
  , publicPath: process.env.NODE_ENV === 'development' ? '/' : '/'
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
      [ { test: /\.m?js$/i
        , exclude: /(node_modules|bower_components)/
        , use:
            { loader: 'babel-loader'
            , options:
                { exclude: 
                    // \\ for Windows, \/ for Mac OS and Linux
                    [ /node_modules[\\\/]core-js/
                    , /node_modules[\\\/]webpack[\\\/]buildin/
                    ]
                }
            }
        }


      , { test: /\.css$/i
        , use:
            [ 'style-loader'
            , 'css-loader'
            ]
        }


      , { test: /\.(png|svg|jpg|jpeg|gif)$/i
        , type: 'asset/resource'
        }


      , { test: /\.(woff|woff2|eot|ttf|otf)$/i
        , type: 'asset/resource'
        }
      ]
  }



const plugins =
  [ new CleanWebpackPlugin()
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
