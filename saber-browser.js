// saber-browser.js
import 'prismjs/themes/prism.css'
import 'saber-highlight-css/default.css'
// assuming this is where main imports go
import 'vue-material-design-icons/styles.css';

import './assets/css/base.css'
import Vue from 'vue'
export default ({ router, setHead }) => {

  // Progress bar is not needed on server-side
  if (process.browser) {
    // These dependencies are only bundled in client build
    const nprogress = require('nprogress')
    nprogress.configure({ showSpinner: false })
    require('nprogress/nprogress.css')

    const loaded = Object.create(null)

    router.beforeEach((to, from, next) => {
      if (!loaded[to.path]) {
        // Start progress bar before entering page
        nprogress.start()
      }

      next()
    })

    router.afterEach(to => {
      loaded[to.path] = true
      // Stop progress bar after entering page
      nprogress.done()
    })
  }
}
