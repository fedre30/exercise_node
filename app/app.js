const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const { check, validationResult } = require('express-validator/check');
const User = require('./modules/user/models/users');
const router = express.Router();

MongoClient.connect('mongodb://localhost:27017/exercice_node', { useNewUrlParser: true }, function (err, db) {
  if (err) {
    console.log(err);
    throw err;
  }
});



app.use(bodyParser.json());

router.post('/users', [
  // email must be an email
  check('email').isEmail(),
  // fullname must be at least 2 chars long
  check('fullname').isLength({ min: 2 }),
  // link must be at lest 5 chars long
  check('github').isLength({ min: 5 })
], (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(422).json({ errors: errors.array() });
  }

  User.create({
    fullname: req.body.fullname,
    email: req.body.email,
    github: req.body.github
  }).then(user => res.json(user));
});

const port = 1234;
app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});