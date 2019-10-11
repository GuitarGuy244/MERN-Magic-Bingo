const jwt = require("jwt-simple");
const User = require("../models/user");
const config = require("../config");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.login = function(req, res, next) {
  //user has had their email and password auth'd
  //we just need to give them a token
  res.send({ token: tokenForUser(req.user) });
};

exports.register = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.password;

  if (!email || !password || !username) {
    return res
      .status(422)
      .send({ error: "You must provide email and password " });
  }

  //see if user with given email exist
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    //if user with email does exist return an error
    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }

    //if a user with email does NOT exist create and save user record
    const user = new User({
      email: email,
      password: password,
      username: username
    });

    user.save(function(err) {
      if (err) {
        return next(err);
      }

      //respond to request indicating the user was created
      res.json({ token: tokenForUser(user) });
    });
  });
};
