
const path = require(`path`)

module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    webpack: {
        alias: {
          apis: path.resolve(__dirname, 'src/apis'),
          assets: path.resolve(__dirname, 'src/assets'),
          components: path.resolve(__dirname, 'src/components'),
          home: path.resolve(__dirname, 'src/components/Home'),
          sections: path.resolve(__dirname, 'src/components/Sections'),
          constant: path.resolve(__dirname, './constants'),
        },
      },
  }
