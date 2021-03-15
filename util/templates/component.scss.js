module.exports = () => ({
  content: `import styled from 'styled-components'

const Container = styled.div(
  ({ color, background }) => \`
    display: flex;
    width: 100%;
    color: \$\{color\};
    background: \$\{background\};
  \`
)

export { Container }
`,
  extension: `.scss.js`
})
