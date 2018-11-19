const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const { check, validationResult } = require('express-validator/check');

MongoClient.connect('mongodb://localhost:27017/exercice_node', { useNewUrlParser: true }, function (err, db) {
  if (err) {
    throw err;
  }
});



app.use(express.json());
app.post('/user', (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password
  }).then(user => res.json(user));
});

app.post('/user', [
  // email must be an email
  check('email').isEmail(),
  // name must be at least 2 chars long
  check('name').isLength({ min: 2 }),
  // link must be at lest 5 chars long
  check('link').isLength({ min: 5 })
], (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  User.create({
    name: req.body.name,
    email: req.body.email,
    link: req.body.link
  }).then(user => res.json(user));
});