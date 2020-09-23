const paths = require('./paths')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const multiple_entry_html_webpack_plugin =
  ( html_entry_descriptors ) => html_entry_descriptors.map(
    ( { title, favicon, template, filename, chunks } ) =>
      new HtmlWebpackPlugin(
        { title:    title
        , favicon:  favicon
        , template: template
        , filename: filname
        , chunks:   chunks
        }
      )
  )


module.exports = 
  { entry:
    { index     : paths.src + 'js/index.js'
    , index_css : paths.src + 'scss/index.scss'
    }
  
  , output:
    { path       : paths.build
    , filename   : '[name].[ext]'
    , publicPath : '/'
    }
  
  , plugins:
    /* clean build folders and unused assets when rebuilding. */
    [ new CleanWebpackPlugin()
  
    , new CopyWebpackPlugin(
        [ { from   : paths.static
          , to     : 'assets'
          , ignore : ['*.DS_Store']
          }
        ]
      )
  
    , ...  multiple_entry_html_webpack_plugin(
        [ { title    : 'Temp Page Title'
          , favicon  : paths.src + '/images/favicon.png'
          , template : path.src + 'html/index.html'
          , filename : 'index.html'
          , chunks   : [ index ]
          }
        ]
      )
    ]
  
  , module: 
    { rules: 
      [ { test: /\.js$/
        , exclude: /node_modules/
        , use: ['babel-loader', 'eslint-loader']
        }
  
      , { test: /\.(scss|css)$/
        , use:
          [ 'style-loader'
          , { loader: 'css-loader'
            , options: 
              { sourceMap: true
              , importLoaders: 1
              }
            }
          , { loader: 'postcss-loader'
            , options: { sourceMap: true }
            }
          , { loader: 'sass-loader'
            , options: { sourceMap: true }
            }
          ]
        },
  
        /* Copy image files to build folder. */
      , { test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i
        , loader: 'file-loader'
        , options:
          { name: '[path][name].[ext]'
          , context: 'src' // prevent display of src/ in filename
          }
        }
  
        /* Inline font files. */
      , { test: /\.(woff(2)?|eot|ttf|otf|)$/
        , loader: 'url-loader'
        , options:
          { limit: 8192
          , name: '[path][name].[ext]'
          , context: 'src' // prevent display of src/ in filename
          }
        }
      ]
    }
  }

