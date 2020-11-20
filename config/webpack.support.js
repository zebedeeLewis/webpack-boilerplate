const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProjectStructure = require('./ProjectStructure')
const path = require('path')



function page_descriptor_to_entry
  ( initialEntries
  , pageDescriptor
  ) {
    const to_entry =
      ( entries
      , [ assetName, assetDesc ]
      ) => (
        { [assetName] : assetDesc.sourceFile
        , ... entries
        }
      )
    

    const inlineAssets = pageDescriptor.assets.inline

    const inlineEntries =
      Object.entries(inlineAssets).reduce( to_entry, {} )

    const externalAssets = pageDescriptor.assets.external

    const externalEntries =
      Object.entries(externalAssets).reduce( to_entry, {} )


    return (
      { ... initialEntries
      , ... externalEntries
      , ... inlineEntries
      }
    )
  }



function entries_from_page_descriptors
  ( pageDescriptors
  ) {
    return pageDescriptors.reduce(page_descriptor_to_entry, {})
  }



function html_webpack_plugins
  ( pageDescriptors
  ) {
    return (
      pageDescriptors.map
        ( ( { pageTitle
            , pageShell
            , pageSourceFile
            , assets
            }
          ) =>
            new HtmlWebpackPlugin(
              { title          : pageTitle
              , context        : 
                  { title : pageTitle
                  }
              , favicon        : ProjectStructure.PATH_TO_FAVICON
              , template       : pageSourceFile
              , filename       : path.basename(pageSourceFile)
              , chunks         :
                  [ ... Object.keys(assets.external)
                  , ... Object.keys(assets.inline)
                  ]
              , inject         : true
              , minify         : false
              }
           )
        )
    )
  }



module.exports =
  { html_webpack_plugins
  , entries_from_page_descriptors
  }
