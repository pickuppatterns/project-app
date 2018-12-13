# project-app

## Setup

1. `cd` into `app` repo
1. `> vue create .`
    * Follow prompts
1. `> code .`
1. Project clean and adjustment:
    * Delete `HelloWorld.vue` and remove from `App.vue`
    * Move `App.vue` into `components` folder
    * Change `main.js` import of `App.vue`
    * Change `logo.png` import in `App.vue` (if you want to keep)
1. Add boilerplace (and template): 
    * `.eslintrc`
    * `main.css`
    * `vue.config.js`
    * `router.js` (as template, remove unused routes)
    * `main.js` (will replace existing file)
    * `/home/Home.vue` (template Home page)
1. Fix `babel.config.js`
    * semicolon
    * add `/* eslint-env node */` as first line
1. Install additional dev modules:
    ```
    > npm i -D postcss-cli postcss-easy-import postcss-loader postcss-nested postcss-simple-vars
    ```
1. Install additional runtime modules:
    ```
    > npm i vue-router
    ```
1. Add `<RouterView></RouterView>` in `App.vue` template section
1. Test that it all works:
    ```
    > npm run serve
    ```

## App Talks to Server

1. Add `services/api.js`
1. Add `test` method to hit server and return rows
1. Fetch in `App.vue` and display via `{{results}}`
1. Test it out

## App Builds to Server

1. run `npm run build` and inspect `dist`
1. Add new `script` in `package.json`:
    * `"build:prod": "npm run build && rm -rf ../project-server/public && cp -R dist ../project-server/public"`
    * (change to correct server folder name)
1. Go to `localhost:3000` and check that it worked!