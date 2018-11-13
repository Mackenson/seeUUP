let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');

 mongoose.connect('mongodb://localhost/seeUUP');

 let db = mongoose.connection;

 let UserSchema = mongoose.Schema({
   firstName:{
     type: String
   },
   lastName:{
     type: String
   },
   emails:{
     type: String
   },
   password:{
     type: String
   }
 });

 let User = module.exports = mongoose.model('User', UserSchema)

 module.exports.createUser = function(newUser, callback) {
   bcrypt.genSalt(10, function(err, salt) {
     bcrypt.hash(newUser.password, salt, function(err, hash) {
       newUser.password = hash;
       newUser.save(callback);
     });
   });
 };


 module.exports.getUserByEmails = function(emails, callback){
   let query = {emails: emails}
   User.findOne(query, callback)
 }

 module.exports.getUserById = function(id, callback){
   User.findById(id, callback)
 }

 module.exports.comparePassword = function(userPassword, hash, callback) {
   bcrypt.compare(userPassword, hash, function(err, match) {
     if (err) {
       throw err
     }
     callback(null, match)
   })
 }
