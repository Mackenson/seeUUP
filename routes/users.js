let express = require('express');
let router = express.Router();

//Resgister
router.get('/register', function(req, res) {
  res.render('register')
})

//Login
router.get('/login', function(req, res) {
  res.render('login')
})

module.exports = router;
