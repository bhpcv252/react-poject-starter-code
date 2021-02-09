const fs = require('fs')
const paths = require('./paths')

const args = require('minimist')(process.argv.slice(2), {
  alias: {
    p: 'page',
    c: 'component',
  },
})

args._.forEach((val) => {
  const path =
    'component' in args && args.component
      ? paths.components + `/${val}`
      : paths.pages + `/${val}`
  const reqType = 'component' in args && args.component ? 'Component' : 'Page'

  if (!fs.existsSync(path)) {
    fs.mkdirSync(path)

    const entryFile = path + `/${val}.jsx`
    fs.writeFile(entryFile, '', function (err) {
      if (err) throw err
      console.log(`Created ${reqType} ${val}.jsx`)
    })
    const styleFile = path + `/${val}.scss`
    fs.writeFile(styleFile, '', function (err) {
      if (err) throw err
      console.log('Style ' + `${val}.scss`)
    })

  } else {
    console.log(`ERROR: ${reqType} ${val} already exists.`)
  }
})
