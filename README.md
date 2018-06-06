# Feedback App

This is a tryout app. Main focus of this exercise is to

- Set up a proper dev environement
- Create an End to End application

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
> - eslint-plugin-import
> - eslint-plugin-jsx-a11y
> - eslint-plugin-react

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

The general flow is, when the request comes in the express app handles the request and gets the passport to intialize the process `passport.initialize()` and authenticates the user `passport.authenticate()`.

### 6. Data Storage

MongoDB is used for data storage. [MongooseJS](http://mongoosejs.com/) is used to model the data for MongoDB.

### 7. Session Management

[cookie-session](https://www.npmjs.com/package/cookie-session) is used as a middleware to manage session.

A user session can be stored in two main ways with cookies: on the server or on the client. This module stores the session data on the client within a cookie, while a module like [express-session](https://www.npmjs.com/package/express-session) stores only a session identifier on the client within a cookie and stores the session data on the server, typically in a database.

Basically when we use _cookie-session_ we store data in the cookie. If its only few info that required to be stored (in my case MongoDB user id), cookie-session is the best choice. But if you need to store multiple data (and you think it can be more than 4kb in size) then go for _express-session_

### 8. Data Serialization

Once the user is authenticated, we use pasport js to add in id (id of the user in mongodb) to the cookie through `passport.serializeUser`. `passport.deserializeUser` is used to retreive the id from cookie.

### 9. Client server

I am using [create-react-app](https://github.com/facebook/create-react-app) for frontend devlopment. _Create-React-App(CRA)_ has a server on its own for the frontend dev environment, which runs at http://localhost:3000. This is different from http://localhost:5000 which is the Express Server for MongoDB interaction and Google OAuth. In the dev environment I am using [concurrently](https://github.com/kimmobrunfeldt/concurrently) to run both servers simultaneously(actually just running both `client` and `dev` npm scripts ;)). Parallel script running packages like [npm-run-all](https://github.com/mysticatea/npm-run-all) or concurrently provides cross platform(eg: windows) support.

CRA has webpack, babel, HMR, etc already setup.

> _CRA_ wont ever be running at production environment, since the react app will be bundled and deployed.

### 10. Use of proxy for '/auth/google' in client server

Proxy is set in `package.json` to target http://localhost:5000 while redirected to path `'/auth/google'`. Two main reasons are

- Cookie Access - By default browser can share cookie only with the current domain (localhost:3000). Proxy does the hard work of taking the cookie from `localhost:3000` and copying to the request to `localhost:5000`. And then express server takes care of authentication process and redirects back to `localhost:3000`
- Cross Origin Resource Sharing - Use of proxy also help overcome the CORS issue by not directly communicating with `localhost:5000`

Testing commit username
