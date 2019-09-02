// saber-node.js
// List all files in a directory in Node.js recursively in a synchronous fashion
// and returns absolute path
const path = require('path')
const fs = require('fs')
const walkSync = function(dir, filelist) {
  let files = fs.readdirSync(dir)
  filelist = filelist || []
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist)
    }
    else {
      filelist.push(path.join(dir, file))
    }
  }) 
  return filelist
};

exports.onCreatePages = function() {
  // Pages are read into the `this.pages` Map
  // Sort posts by createdAt (date) from new to old
  const posts = [...this.pages.values()]
    .filter(page => !page.draft)
    .sort((a, b) => {
      return a.createdAt > b.createdAt ? 1 : -1
    })
  const selectFields = page => (page && {
    title: page.title,
    permalink: page.permalink
  })
  // inserting prevPost and NextPost to most of the entries
  // TODO figure out how to insert stuff for post and non main pages
  for (const [index, post] of posts.entries()) {
    post.prevPost = selectFields(posts[index - 1])
    post.nextPost = selectFields(posts[index + 1])
  }
  for (const [index, page] of posts.entries()) {
    page.prevPost = selectFields(posts[index - 1])
    page.nextPost = selectFields(posts[index + 1])
  }

  // adding toc data to pages that show toc
  // only index page for now

  
  // get all pages
  const pagePaths = walkSync('pages')
  // fixing formatting for each element, remove pages and extensions
  // in saber everything gets mapped to html files anyway under the pages folder
  const cleanPaths = pagePaths.map(page => {
    let cleanPath = page.replace(/\.[^/.]+$/, ".html")
    cleanPath = cleanPath.replace(/_posts/, "posts")
    cleanPath = cleanPath.replace(/pages\/|pages\\/, "")
    // for windows convert forward slashs to backslashs
    cleanPath = cleanPath.replace(/\\/,'/')
    return cleanPath
  })

  const titlePages = [...posts]
    .filter(post => post.permalink === '/')
    .sort((a, b) => {
      return a.createdAt > b.createdAt ? 1 : -1
    })
  for (const [index, page] of titlePages.entries()) {
    page.toc = cleanPaths
  }
}

exports.getWebpackConfig = function(config, { type }) {
  // e.g. Adding a webpack plugin
  // config.plugins.push(new SomeWebpackPlugin())

  // `type` is either `client` or `server`
  if (type === 'client') {
    // config.plugins.push(new SomeWebpackPluginForClientBuild())
  }
  // You must return the `config`!
  return config
}

// https://saber.land/docs/working-with-webpack.html#advanced-configuration
// exports.chainWebpack = function(chain) {
//   // e.g. Resolve .css files
//   chain.resolve.extensions.add('.css')
// }
