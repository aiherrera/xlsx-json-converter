module.exports = (componentName) => ({
  content: `export interface ${componentName}Props {
  textColor: string
  backgroundColor: string
}
`,
  extension: `.types.ts`
})
