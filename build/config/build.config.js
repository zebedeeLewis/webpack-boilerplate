const path = require('path')



const PROJECT_ROOT = path.join(__dirname, '../..')


// Project Build Configuration Paths
const Build = {}
Build.Root = path.join(PROJECT_ROOT, 'build/')
Build.ConfigDir = path.join(Build.Root, 'config/')
Build.LibDir = path.join(Build.Root, 'lib/')
Build.PostCssConfigPath = path.join(Build.ConfigDir, 'postcss.config.js')


// Source File Paths
const Src = {}
Src.Root = path.join(PROJECT_ROOT, 'src/')


Src.Page = {}
Src.Page.Root = path.join(Src.Root, 'page/')
Src.Page.HomeDir = path.join(Src.Page.Root, 'home/')
Src.Page.HomeHtmlPath = path.join(Src.Page.HomeDir, 'index.template.html')
Src.Page.HomeJsPath = path.join(Src.Page.HomeDir, 'index.js')
Src.Page.HomeScssPath = path.join(Src.Page.HomeDir, 'index.scss')
Src.Page.HomeTemplateDir = path.join(Src.Page.HomeDir, 'template/')
Src.Page.HomeImageDir = path.join(Src.Page.HomeDir, 'image')


Src.Page.LibDir = path.join(Src.Page.Root, 'lib/')
Src.Page.LibTemplateDir = path.join(Src.Page.LibDir, 'template/')
Src.Page.LibHandlerDir = path.join(Src.Page.LibDir, 'handlebars_handler/')
Src.Page.LibScssDir = path.join(Src.Page.LibDir, 'scss/')
Src.Page.LibJsDir = path.join(Src.Page.LibDir, 'js/')
Src.Page.LibImageDir = path.join(Src.Page.LibDir, 'image/')


Src.Component = {}
Src.Component.Root = path.join(Src.Root, 'component/')
Src.Component.LibDir = path.join(Src.Component.Root, 'lib/')
Src.Component.LibTemplateDir = path.join(Src.Component.LibDir, 'template/')
Src.Component.LibHandlerDir = path.join(Src.Component.LibDir, 'handlebars_handler/')


// Paths To Source Library
Src.LibDir = path.join(Src.Root, 'lib/')


// Dist File Paths
const Dist = {}
Dist.Root = path.join(PROJECT_ROOT, 'dist/')
Dist.CssDir = path.join(Dist.Root, 'css/')
Dist.JsDir = path.join(Dist.Root, 'js/')
Dist.ImageDir = path.join(Dist.Root, 'image/')


// Misc
Build.HtmlWrapperPath
  = path.join(Src.Page.LibTemplateDir, 'shell.template.html')
Build.DevPublicPath = '/'
Build.ProdPublicPath = '/'
Build.Favicon = path.join(Src.Page.LibImageDir, 'favicon-32x32.png')



module.exports =
  { Build
  , Src
  , Dist
  }

