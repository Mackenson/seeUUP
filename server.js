require('events').EventEmitter.prototype._maxListeners = 100;
let mongo = require('mongodb');
let path = require('path');
let mongoose = require('mongoose');
let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let localStrategy = require('passport-local').Strategy;
let passport = require('passport');
let exphbs = require('express-handlebars');
let expressValidator = require('express-validator');
let flash = require('connect-flash');
let session = require('express-session');
 mongoose.connect('mongodb://localhost/seeUUP', { useNewUrlParser: true });
let db = mongoose.connection;

let routes = require('./routes/index');
let users = require('./routes/users');

//Init App

let app = express();
console.log(db);
//View engine
// API calls
app.get('/home', (req, res) => {
  res.send({ express: 'bonjour From Express' });
});

app.post('/home', (req, res) => {
  debugger
  console.log(req.body);
  // let firstName = req.body.firstName;
  // let lastName = req.body.lastName;
  // let emails = req.body.emails;
  // let password = req.body.password;
  // let password2 = req.body.password2;
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
  });
}


//bodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());



//Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}))

//Passport Init
app.use(passport.initialize());
app.use(passport.session());


//Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    let namespace = param.split('.')
    ,root = namespace.shift()
    ,formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift()  + ']'
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

//Connect Flash
app.use(flash());

//Global Vars
app.use(function(req, res, next) {
  res.locals.succes_msg = req.flash('succes_msg');
  res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})

//Set Port
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('server is running on port' +  app.get('port'));
})
