const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { user, password } = require('./.mongo-config.js');
const Course = require('./models/course');

const app = express();
const router = express.Router();
const port = process.env.PORT | 8888;

const dbUrl = `mongodb://${user}:${password}@ds161518.mlab.com:61518/tutor-app`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', (req, res) => res.json({ message: 'welcome' }));

// prefix
app.use('/api', router);

app.listen(port);
console.log(`Server on port ${port}`);

// mongo
mongoose.connect(dbUrl);

// ROUTES

router.route('/courses')
  .post((req, res) => {
    const course = new Course();
    course.title = 'Initiation à React';
    course.description = `Un cours de A à Z pour s'initier à React,
      comment mettre en place un environnement de développement etc.`;
    course.chips = [
      'javascript',
      'développement',
      'front-end',
    ];
    course.date = new Date();
    course.views = 0;
    course.save(err => {
      if (err) {
        return res.send(err);
      }
      return res.status(200).json({ message: 'Course created' });
    });
  });
