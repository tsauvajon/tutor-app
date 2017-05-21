const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const firebase = require('firebase');
require('firebase/auth');

const fbConfig = require('./.firebaserc.private');
const { email, password } = require('./private/auth');

const app = express();
const router = express.Router();
const port = process.env.PORT | 8888;

// firebase

firebase.initializeApp(fbConfig);
const database = firebase.database();
firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
  const { code, message } = error;
  console.log(code, message);
  var errorCode = error.code;
  var errorMessage = error.message;
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', (req, res) => res.json({ message: 'welcome' }));

// prefix
app.use('/api', router);

// start the server
app.listen(port);
console.log(`Server on port ${port}`);

// ROUTES

router.route('/courses')
  .post((req, res) => {
    const { title, description, chips } = req.body;
    const data = {
      title,
      description,
      chips,
      createdAt: Date.now(),
    };
    const key = database.ref().child('courses').push(
      Object.assign({}, data)
    ).key;
    return res.status(201).json({
      message: 'Course CREATED',
      data,
      key,
    });
  })
  .get((req, res) => {
    database.ref('courses').on('value', (snapshot) => {
      if (snapshot.val() === null) {
        return res.status(404).json({
          message: 'NOT FOUND',
        });
      }
      return res.status(200).json({
        message: 'OK',
        data: snapshot.val(),
      });
    });
  });

router.route('/courses/:id')
  .put((req, res) => {

  })
  .get((req, res) => {
    database.ref(`courses/${req.params.id}`).on('value', (snapshot) => {
      if (snapshot.val() === null) {
        return res.status(404).json({
          message: 'NOT FOUND',
        });
      }
      return res.status(200).json({
        message: 'OK',
        data: snapshot.val(),
      });
    });
  })
  .delete((req, res) => {

  })
