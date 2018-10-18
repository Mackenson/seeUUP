let express = require('express');
let router = express.Router();

//Resgister
router.get('/resgister', function(req, res) {
  res.render('/seeuup-client')
})

//Login
router.get('/login', function(req, res) {
  res.render('login')
})

module.exports = router;
