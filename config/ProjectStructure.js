const path = require('path')



const PROJECT_ROOT_DIR = path.join(__dirname, '..')



const PROJECT_CONFIG_DIR = path.join(PROJECT_ROOT_DIR, 'config/')

const PROJECT_CONFIG_LIB_DIR = path.join(PROJECT_CONFIG_DIR, 'lib/')

const HANDLEBARS_DIR = path.join(PROJECT_CONFIG_LIB_DIR, 'handlebars/')

const POST_CSS_CONFIG_PATH =
  path.join(PROJECT_CONFIG_DIR, 'postcss.config.js')



const SRC_DIR = path.join(PROJECT_ROOT_DIR, 'src/')

const SRC_SCSS_DIR = path.join(SRC_DIR, 'scss/')

const SRC_JS_DIR = path.join(SRC_DIR, 'js/')

const SRC_IMAGE_DIR = path.join(SRC_DIR, 'images/')

const PATH_TO_COMMON_JS_SRC = path.join(SRC_JS_DIR, 'common.js')

const PATH_TO_COMMON_SCSS_SRC = path.join(SRC_SCSS_DIR, 'common.scss')

const PATH_TO_FAVICON_SRC = 'favicon.png'

const PATH_TO_INDEX_HTML_SRC = path.join(SRC_DIR, 'index.html')

const PATH_TO_INDEX_JS_SRC = path.join(SRC_JS_DIR, 'index.js')

const PATH_TO_INDEX_SCSS_SRC = path.join(SRC_DIR, 'index.scss')



const DIST_DIR = path.join(PROJECT_ROOT_DIR, 'dist/')

const DIST_SCSS_DIR = path.join(DIST_DIR, 'scss/')

const DIST_JS_DIR = path.join(DIST_DIR, 'js/')

const DIST_IMAGE_DIR = path.join(DIST_DIR, 'images/')




const DEV_PUBLIC_PATH = '/architectural'

const PROD_PUBLIC_PATH = '/'



const pageDescriptors =
  [ { pageTitle      : 'Home'
    , pageSourceFile : PATH_TO_INDEX_HTML_SRC
    , assets :
      { external :
        { index :
            { sourceFile : PATH_TO_INDEX_JS_SRC 
            }
        }
      , inline :
        { common_js :
            { sourceFile : PATH_TO_COMMON_JS_SRC
            }
        , common_scss :
            { sourceFile : PATH_TO_COMMON_SCSS_SRC
            }
        }
      }
    }
  ]



module.exports =
  { PROJECT_ROOT_DIR
  , DIST_DIR
  , DIST_SCSS_DIR
  , DIST_JS_DIR
  , DIST_IMAGE_DIR
  , SRC_DIR
  , PATH_TO_FAVICON_SRC
  , DEV_PUBLIC_PATH
  , PROD_PUBLIC_PATH
  , POST_CSS_CONFIG_PATH
  , HANDLEBARS_DIR
  , pageDescriptors
  }

