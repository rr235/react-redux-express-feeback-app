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

#### 2.2 Server-side File Watcher

[**Nodemon**](https://github.com/remy/nodemon) is used to watch the file changes

### 3. Deployment checklist

#### 3.1 Dynamic Port Binding

Use `process.env.PORT`

#### 3.2 Specify node environment

In _package.json_, set engines -> node, npm

Example:

```json
"engines": {
    "node": "8.9.1",
    "npm": "5.6.0"
  }
```

#### 3.3 Specify start script

In _package.json_, set scripts -> start

Example:

```json
"scripts": {
    "start": "node index.js"
  }
```

#### 3.4 Create `.gitignore` file

Make sure you have `.gitignore` file.

### 4. Heroku Deployment

Push code to the heroku git repo. `git push` triggers the build and the deploy process.

```shell
git push heroku master
```

Heroku cli git deployment docs can be found [here](https://devcenter.heroku.com/articles/git).

### 5. Google OAuth Setup

[PassportJS](http://www.passportjs.org/) is used to authenticate user through Google OAuth.

[Passport Google OAuth 2.0](https://github.com/jaredhanson/passport-google-oauth2) is the stegery used.
Note: npm package is `passport-google-oauth20`
