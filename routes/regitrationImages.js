let express = require('express');
let router = express.Router();
let images = require('../seeuup-client/public/json/registrationPictures')
console.log(images);
router.get('/image', function(req, res){
  console.log("were in the application");
  console.log(images);
  res.send(images);
});
// console.log("we pass the api");

module.exports = router;
