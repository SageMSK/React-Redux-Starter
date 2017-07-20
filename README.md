# React with Redux Starter

This React/Redux starter uses:
- [React Router (v4)](https://github.com/ReactTraining/react-router)
- [Redux-thunk](https://www.npmjs.com/package/redux-thunk)
- [Prop-Types](https://www.npmjs.com/package/prop-types)

First, you will need [Node.js](https://nodejs.org/en/) and a text editor of your choice ([atom](https://atom.io/), [VSCode](https://code.visualstudio.com/), or [Sublime Text 3](https://www.sublimetext.com/3)).

To start:

```
> npm install
> npm run dev
```

This boilerplate supports both CSS and SASS files. It's your choice. It also has basic eslint recommendation setting and extra react linting as well.

In order to run eslint:

```
> npm run lint
```

*In the eslintrc file, "es6": true is there because this will enable ES6 syntax*
*i.e. const [ foo, baz ] = Promise.all([ fooP, bazP ]); will no longer show as a eslint error*

For Production:

```
> npm run build
```