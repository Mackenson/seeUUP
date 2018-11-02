let express = require('express');
let router = express.Router();
let user = require('../models/user')

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

    res.redirect('/users/login')
  }
})

//Login
router.get('/login', function(req, res) {
  res.render('login')
})

module.exports = router;
