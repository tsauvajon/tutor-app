const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const firebase = require('firebase');
// require('firebase/auth');
// require('firebase/database');

const fbConfig = require('./.firebaserc.private');

// const { user, password } = require('./.mongo-config.js');
// const Course = require('./models/course');

const app = express();
const router = express.Router();
const port = process.env.PORT | 8888;

firebase.initializeApp(fbConfig);
const database = firebase.database();

// const dbUrl = `mongodb://${user}:${password}@ds161518.mlab.com:61518/tutor-app`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', (req, res) => res.json({ message: 'welcome' }));

// prefix
app.use('/api', router);

app.listen(port);
console.log(`Server on port ${port}`);

// firebase


// // read / listen
// database.child("users").on('value', function(snapshot) {
//   // ...
// });

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
    let key = database.ref().child('courses').push({
      title: data.title,
      description: data.description,
      chips: data.chips,
      createdAt: data.createdAt,
    }).key;
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
  // .post((req, res) => {
  //   const course = new Course();
  //   course.title = 'Initiation à React';
  //   course.description = `Un cours de A à Z pour s'initier à React,
  //     comment mettre en place un environnement de développement etc.`;
  //   course.chips = [
  //     'javascript',
  //     'développement',
  //     'front-end',
  //   ];
  //   course.date = new Date();
  //   course.views = 0;
  //   course.save(err => {
  //     if (err) {
  //       return res.send(err);
  //     }
  //     return res.status(200).json({ message: 'Course created' });
  //   });
  // });
