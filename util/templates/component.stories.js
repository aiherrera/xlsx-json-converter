module.exports = (componentName) => ({
  content: `import React from 'react'
import {
  withKnobs,
  color
} from '@storybook/addon-knobs'
import { ${componentName} as ${componentName}Component } from './${componentName}'

export default {
  title: 'Playground/React Components',
  decorators: [withKnobs],
  component: ${componentName}Component
}

export const ${componentName} = () => {
  const textColor = color('Text color', '#F1EAEA')
  const backgroundColor = color('Background color', '#4949D8')

  return (
    <>
      <${componentName}Component
        textColor={textColor}
        backgroundColor={backgroundColor}
      />
    </>
  )
}

`,
  extension: `.stories.tsx`
})
