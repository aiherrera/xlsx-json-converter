require('colors')
const fs = require('fs')
const templates = require('./templates')
const index = require('./index')

let componentName = process.argv[2]
// Capitalize component name
componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1)

if (!componentName) {
  console.error('Please supply a valid component name'.red)
  process.exit(1)
}

console.log('Creating Component Templates with name: ' + componentName)

const componentDirectory = `./src/${componentName}`

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red)
  process.exit(1)
}

fs.mkdirSync(componentDirectory)

console.log(typeof templates)
const generatedTemplates = templates.map((template) => template(componentName))

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${componentDirectory}/${componentName}${template.extension}`,
    template.content
  )
})

const indexTemplate = index(componentName)
fs.writeFileSync(`./src/index.ts`, indexTemplate.content)

console.log('Successfully created component under: ' + componentDirectory.green)
