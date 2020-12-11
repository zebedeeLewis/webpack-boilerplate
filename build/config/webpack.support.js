const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const fs = require('fs')

const preprocess_templates = require('../lib/preprocess_templates.js')
const buildConfig = require('./build.config.js')



function file_exists
  ( absolutePathToFile
  ) {
    try {
      fs.accessSync(absolutePathToFile)
    } catch(e) {
      return false
    }

    return true
  }



function determine_path_to_html_wrapper
  ( absolutePathToPageDir
  ) {
    const pathToDefaultHtmlWrapper
      = buildConfig.Build.HtmlWrapperPath
    const pathToHtmlWrapper
      = path.join(absolutePathToPageDir, 'shell.handlebars.html')


    if( file_exists(pathToHtmlWrapper) ) {
      return pathToHtmlWrapper

    } else if( file_exists(pathToDefaultHtmlWrapper) ) {
      return pathToDefaultHtmlWrapper

    } else {
      return ''
    }
  }



function partial_name_from_path
  ( absolutePathToFile
  , templatesDir
  ) {
    const dirname
      = path.dirname(path.relative(templatesDir, absolutePathToFile))
    const basename
      = path.basename
          ( path.relative(templatesDir, absolutePathToFile)
          , '.js'
          )
    const relativePath = path.join(dirname, basename)
    const partialName = relativePath.split(path.sep).join('/')


    return partialName
  }



function html_webpack_plugin_from_entry
  ( entryPointMetadata
  , entryName
  , absolutePathToEntryFile
  ) {
    const absolutePathToPageDir = path.dirname(absolutePathToEntryFile)


    const pathToHtmlWrapper
      = determine_path_to_html_wrapper(absolutePathToPageDir)
    const nameOfContentPartial
      = partial_name_from_path
          ( absolutePathToEntryFile
          , buildConfig.Src.Page.Root
          )
    const title
      = ( entryPointMetadata 
            ? entryPointMetadata.title || 'NO TITLE'
            : 'NO TITLE'
        )

    const templatesNamespace = path.basename(buildConfig.Src.Page.Root)


    const template
      = `${pathToHtmlWrapper}`
      + `?title=${title}`
      + `&templatesDir=${buildConfig.Src.Page.Root}`
      + `&templatesNamespace=${templatesNamespace}`
      + `&nameOfContentPartial=${nameOfContentPartial}`


    return new HtmlWebpackPlugin(
      { template : template
      , filename : entryName + '.html'
      , favicon  : buildConfig.Build.Favicon
      }
    )
  }
  


const preprocessor =
  function
    ( content
    , loaderContext
    ) {
      return (
        preprocess_templates.call
          ( loaderContext
          , { content
            , templatesDirs :
                [ { dir       : buildConfig.Src.Page.Root
                  , namespace : 'page'
                  }
                , { dir       : buildConfig.Src.Page.LibTemplateDir
                  , namespace : 'page/partial'
                  }
                , { dir       : buildConfig.Src.Component.Root
                  , namespace : 'component'
                  }
                , { dir       : buildConfig.Src.Component.LibTemplateDir
                  , namespace : 'component/partial'
                  }
                ]
            , handlersDirs  :
                [ buildConfig.Src.Page.LibHandlerDir
                ]
            }
          )
      )
    }



module.exports =
  { html_webpack_plugin_from_entry
  , preprocessor
  }

