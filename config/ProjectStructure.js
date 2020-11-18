const path = require('path')



const PROJECT_ROOT_DIR = path.join(__dirname, '..')

const BUILD_DIR = path.join(PROJECT_ROOT_DIR, 'dist')

const SRC_DIR = path.join(PROJECT_ROOT_DIR, 'src')


module.exports =
  { PROJECT_ROOT_DIR
  , BUILD_DIR
  , SRC_DIR
  }
