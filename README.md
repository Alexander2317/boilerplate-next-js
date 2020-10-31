<h1>Simple next.js boilerplate for React SSR Applications</h1>

Settings for launch
-----------------------------------

1. Install package manager [yarn](https://yarnpkg.com/).
```npm install -g yarn```
2. Run the command in the console ```yarn install```
3. Run the command in the console ```yarn build```
4. Run the command in the console ```yarn dev```
5. Open the project [in browser](http://localhost:3000)


Main command
-----------------------------------

```
precommit - base command wich combine yarn fix, yarn test and git add
lint:js - check correct js code
lint:css - check correct css code
lint - base command wich combine lint:js and lint:css
fix:js - formatting your js code
fix:css - formatting your css code
fix - base command wich combine fix:js and fix:css
flow - check correct types via flow
dev - command to start development server
start - command to start production server
build - build project
build:analyze - analyze your bundel project
build:docker - build docker bundle
```

For example ```yarn start``` - launch server

Main libraries
 -----------------------------------
- next.js
- express.js
- react
- react-dom
- next-routes
- redux
- redux-saga
- next-redux-saga
- reselect
- immutable
- next-i18next
- flow.js
- postcss
- babel
- dotenv
- prettier
- eslint
- stylelint
- Jest
- Enzyme
- Docker

<h2>Caveats</h2>
Project has problems with postcss and meta tags because of next.js updated with bugs.
<br>
The following pull requests were made:
<br>
1. wait for it to merge https://github.com/vercel/next.js/pull/17770 (Meta tags bug)
<br>
2. <strike>wait for it to merge https://github.com/vercel/next.js/pull/17415 (PostCSS bug)</strike> (available from 9.5.6-canary.11)
<br>
3. next-i18next warning on 404 page https://github.com/isaachinman/next-i18next/issues/79#issuecomment-710763049
<br>
4. don't insert initialState to <code>createStore(reducer, **initialState**, enhancers)</code>. It makes a warning https://github.com/kirill-konshin/next-redux-wrapper/issues/202#issuecomment-705737929
