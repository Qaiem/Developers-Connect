// In this snippet, we are creating a simple route that returns a JSON object with a message :
// Users Works. This is a test route to ensure that the users route is working properly. We will test this route in the next section.
const express = require("express");
const router = express.Router();
//Load User model
const User = require("../../Models/User");
//Load Avatar
const gravatar = require("gravatar");
//Load bcrypt for password encryption or hashing
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

//Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");


//@route GET  api/users/test
//@description Tests users route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

//@route GET  api/users/register
//@description  register users
//@access Public
router.post("/register", (req, res) => {
 const { errors, isValid } = validateRegisterInput(req.body);

 //Check Validation
 if (!isValid) {
   return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json({errors});
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", //size
        r: "pg", //rating
        d: "mm", //default
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

//@route GET  api/users/login
//@description  login users / returning JWT Token
//@access Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

 //Check Validation
 if (!isValid) {
   return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  //Find user by email
  User.findOne({ email }).then((user) => {
    //Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    //Check Password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        //User Matched
        //Create JWT Payload
        const payload = { id: user.id, name: user.name, avatar: user.avatar };

        //Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

//@route GET  api/users/current
//@description return current user
//@access Public

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({ 
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
     });
});

module.exports = router;
