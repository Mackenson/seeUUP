let express = require('express');
let router = express.Router();
let User = require('../models/user')
let passport = require('passport')
let localStrategy = require('passport-local').Strategy

//Resgister
router.post('/register', function(req, res) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let emails = req.body.emails;
  let password = req.body.password;
  let password2 = req.body.confirmPassword;
  //Validation users
  req.checkBody('firstName', 'Fist Name is required').notEmpty();
  req.checkBody('lastName', 'Last Name is required').notEmpty();
  req.checkBody('emails', 'emails is required').notEmpty();
  req.checkBody('emails', 'emails is not valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();
  // req.checkBody('password2', 'Password do not match').equals(req.body.password);

  let errors = req.validationErrors()

  if (errors) {
    console.log('yes');
  } else {
    var newUser = new User({
      firstName: firstName,
      lastName: lastName,
      emails: emails,
      password: password
    });

    User.createUser(newUser, function(err, user) {
      if (err) throw err;
      console.log(user);
    })
    req.flash('succes_msg', 'You are registered and can login now')
    res.redirect('/home');
  }
})

//local
passport.use(new localStrategy(
  function(emails, password, done) {
    User.getUserByEmails(emails, function(err, user){
      if (err) {
        throw err
      }else if (!user) {
        return done(null, false, {message: 'Unknown user'});
      }

      User.comparePassword(password, user.password, function(err, compare) {
        if (err) {
          throw err
        } else if(compare) {
          return done(null, user);
        }else {
          return done(null, false, {message: 'Invalid Password'});
        }
      })
    })
  }))

  //serialize
passport.serializeUser(function(user, done){
  done(null, user.id)
})

passport.deserializeUser(function (id, done){
  User.getUserById(id, function(err, user) {
    done(err, user)
  })
})
//Login
router.post('/login',
  passport.authenticate('local', {successRedirect: '/', failureRedirect: '/users', failureFlash: true}),
  function(req, res) {
    res.redirect('/')
  })

//
router.get('/login', function(req, res) {
  res.send({ express: 'bonjour From Express' });
})

module.exports = router;
