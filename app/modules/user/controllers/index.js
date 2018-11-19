const User = require('./models/user');
exports.createUser = (req, res, next) => {

  const { fullname, email, github } = req.body;
  if (fullname && email && github) {

    User.create({
      fullname,
      email,
      github,
    })
      .then(user => res.json(user))
      .catch(next)
  }
}