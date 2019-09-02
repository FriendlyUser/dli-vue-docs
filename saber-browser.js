// saber-browser.js
import 'prismjs/themes/prism.css'
import 'saber-highlight-css/default.css'
export default ({ setHead }) => {
  setHead({
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans+HK&display=swap'
      }
    ]
  })
}