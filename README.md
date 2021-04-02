# React Component Library

[![Build status](https://badge.buildkite.com/90ff98db996bb137c5be1bdce666c4b1ce68a25b17af0a6a04.svg?branch=master)](https://buildkite.com/harvey/react-component-library)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

### **Note**: This is a customized fork from [react-component-library](https://github.com/HarveyD/react-component-library) by Harvey Delaney

This project skeleton was created to help people get started with creating their own React component library using:

- [Rollup](https://github.com/rollup/rollup)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/) to help you create and show off your components
- [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library) enabling testing of the components

## Development

### Testing

```console
npm run test
```

### Building

```console
npm run build
```

### Storybook

To run a live-reload Storybook server on your local machine:

```console
npm run storybook
```

To export your Storybook as static files:

```console
npm run storybook:build
```

Generating New Components
I've included a handy NodeJS util file under util called create-component.js. Instead of copy pasting components to create a new component, you can instead run this command to generate all the files you need to start building out a new component. To use it:

```console
npm run generate YourComponentName
```

This will generate:

```console
/src
  /YourComponentName
    YourComponentName.tsx
    YourComponentName.stories.tsx
    YourComponentName.test.tsx
    YourComponentName.types.ts
    YourComponentName.scss
```

> The default templates for each file can be modified under util/templates.

> You can type the component name in lowercase mode the command will Capitilized your component on generation time.

> Don't forget to add the component to your index.ts exports if you want the library to export the component!
