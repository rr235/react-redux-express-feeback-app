# Feedback App

This is a tryout app. Main focus of this esercise is to

* Set up a proper dev environement
* Create an End to End application

---

## Devlopment Setup

### 1. Editor Used - VSCode

Command to launch
`code path/to/project/folder`

Enable format on save in the workspace settings
`"editor.formatOnSave": true`

### 2. Dependencies

#### 2.1. Code Consistancy

**Elint** is used for setting up linting rules. I am using airbnb linting _airbnb-config-eslint_.

https://github.com/airbnb/javascript

https://www.npmjs.com/package/eslint-config-airbnb

> _airbnb-config-eslint_ has following peer dependencies
>
> * eslint-plugin-import
> * eslint-plugin-jsx-a11y
> * eslint-plugin-react

[**Prettier**](https://github.com/prettier/prettier) is used for code formatting.

[**eslint-config-prettier**](https://github.com/prettier/eslint-config-prettier) is used to prevent eslint rules from conlicting with prettier.

[**eslint-plugin-prettier**](https://github.com/prettier/eslint-plugin-prettier) is the eslint plugin for prettier formatting.

**eslint-config** is needed for VSCode to intergrate prettier with eslint config. Also set `"prettier.eslintIntegration": true` in the workspace settings

> Manually running eslint
>
> `cd server`  
> `npx eslint .` or `node_modules/.bin/eslint .` - shows errors and warnings  
> `npx eslint . --fix` or `node_modules/.bin/eslint . --fix` - Fixes autofixable issues
