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
 mongoose.connect('mongodb://localhost/seeUUP');
let db = mongoose.connection;

let routes = require('./routes/index');
let users = require('./routes/users');

//Init App

let app = express();

//View engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}))
app.set('view engine', 'handlebars')

//bodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


//Set Static Folders
app.use(express.static(path.join(__dirname, 'public')));


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

app.use('/', routes);
app.use('/users', users);

//Set Port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log('server is running on port' + app.get('port'));
})
