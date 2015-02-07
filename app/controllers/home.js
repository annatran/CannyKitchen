var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Article = mongoose.model('Article'),
    User = mongoose.model('User'),
    extend = require('extend'),
    bodyParser = require('body-parser'),
    swig = require('swig'),
    bcrypt = require('bcrypt');

module.exports = function (app) {
  app.use('/', router);
};

swig.setDefaults({ cache: false });

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'Home'
    });
  });
});

router.get('/login', function (req, res) {
  res.render('login', {
    title: 'Login'
  });
});

router.post('/login', function (req, res) {
  var email = req.body.email;
  var pw = req.body.password;
  var hash = bcrypt.hashSync(pw, 10);
  User.findOne({'email' : email, 'password' : pw}, function (err, doc) {
    if (doc) {
      res.send("Login success.");
    } else {
      res.render('login', {alert: "yes"});
    }
  });
});

router.get('/signup', function (req, res) {
    res.render('signup', {
      title: 'Signup'
    });
});

router.post('/signup', function (req, res) {
  var email = req.body.email;
  var username = req.body.username;
  var pw = req.body.password;
  var cpw = req.body.cfmpassword;
  User.findOne({'email' : email}, function (err, doc) {
    if (doc) {
      res.render('signup', {alert: "yes", msg: "Email already taken."});
      // res.send("Email already taken."); 
    } else if (pw != cpw) {
      res.render('signup', {alert: "yes", msg: "Passwords do not match."});
    } else {
      // var hash = bcrypt.hashSync(pw, 10);
      var newuser = new User({username: username, email: email, password: pw});
      newuser.save(function (err) {
        if (err) res.send('Error.');
        res.send('Success.');
      });
    }
  });
});