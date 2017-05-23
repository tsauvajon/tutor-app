[![Build Status](https://travis-ci.org/tsauvajon/tutor-app.svg?branch=master)](https://travis-ci.org/tsauvajon/tutor-app)

# tutor-app

Tutoring app for schools

[demo](https://tutorapp-bdaa7.firebaseapp.com)

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build
```

Create your firebase config file:
```src/private/fbConfig.js```
``` javascript
const config = {
  apiKey: '',
  databaseURL: '',
  storageBucket: '',
  authDomain: '',
  messagingSenderId: '',
  projectId: '',
};

export default config;
```

``` bash
# prepare firebase
yarn global add firebase-tools
firebase login
firebase init

# deploy
yarn build
firebase deploy
```
