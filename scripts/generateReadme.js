const fs = require('fs')
const TOC = require('markdown-toc')
const { pathResolve, readFile } = require('./utils.js')

const headerMd = 'scripts/README-base.md'
const files = [
  'docs/apiWebsite/README.md', 
  'docs/website/README.md',
  'docs/library/README.md',
  'docs/tools/README.md',
  'docs/teachbooks/README.md',
  'docs/article/README.md',
  'docs/assets/README.md',
  'docs/links/README.md',
]

const generate = async () => {
  let content = []

  for (const file of files) {
    content.push(await readFile(file))
  }

  const header = await readFile(headerMd)

  const toc = TOC(content.join('\n')).content

  content = [header, toc, ...content]

  fs.writeFile(pathResolve('README.md'), content.join('\n'), 'utf8', () => {
    console.log('success!!!')
  })
}

generate()