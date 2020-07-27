const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

exports.pathResolve = dir => path.join(__dirname, '..', dir)

exports.readFile = file =>
	new Promise((resolve, reject) => {
		const dirpath = this.pathResolve(file)

		fs.readFile(dirpath, 'utf8', (err, data) => {
			if (err) {
				reject()
			}

			resolve(matter(data).content)
		})
	})

exports.isGithub = url => /^.*(https?):\/\/github\.com\/.*/.test(url)