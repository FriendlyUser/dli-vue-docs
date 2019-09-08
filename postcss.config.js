const { join } = require('path')

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')(),
    require('postcss-nested')
  ]
}