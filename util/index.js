module.exports = (componentName) => ({
  content: `import { ${componentName} } from './${componentName}/${componentName}'
import { ${componentName}Props } from './${componentName}/${componentName}.types'

export { ${componentName}, ${componentName}Props }
`,
  extension: `.ts`
})
