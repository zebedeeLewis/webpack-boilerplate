const path = require('path')



const projectRoot = path.resolve(__dirname, '../..')

module.exports
  = { projectRoot     : projectRoot
    , srcDir          : 'src'
    , distDir         : 'dist'
    , devPublicPath   : '/decor/'
    , prodPublicPath  : '/decor/'
    , pageInits       :
        [ { pageId   : 'index'
          , pageName : 'Home'
          , dirname  : 'index'
          }
        , { pageId   : 'contact'
          , pageName : 'Contact'
          , dirname  : 'contact'
          }
        ]
    }
