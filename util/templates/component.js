module.exports = (componentName) => ({
  content: `import React, { FC } from "react";
import { ${componentName}Props } from "./${componentName}.types";
import { Container } from "./${componentName}.scss";

export const ${componentName}: FC<${componentName}Props> = ({ textColor, backgroundColor }) => {
  return (
    <>
      <Container data-testid="${componentName}" color={textColor} background={backgroundColor}>

      </Container>
    </>
  )
}

`,
  extension: `.tsx`
})
