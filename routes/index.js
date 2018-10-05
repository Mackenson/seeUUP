let express = require('express');
let router = express.Router();

//HomePage
router.get('/', function(req, res) {
  res.render('index')
})

module.exports = router;
