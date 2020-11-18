const path = require('path')
const ProjectStructure = require('./ProjectStructure')



const output =
  { filename: '[name].js'
  , path: ProjectStructure.BUILD_DIR
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
      [ { test: /\.m?js$/
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
      ]
  }



const resolve =
  { extensions : ['.js']
  }



module.exports =
  { entry: path.join(ProjectStructure.SRC_DIR, 'index.js')
  , output
  , module : webpackModule
  , resolve
  }
