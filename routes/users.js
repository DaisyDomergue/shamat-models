var express = require('express');
var mongoose = require("mongoose");
var router = express.Router();
// var User = mongoose.model('user');
var User = require('../models/User/User');
var Login = require('../models/User/Login');
var Person = require('../models/User/Person');
var Address = require('../models/User/Address');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({})
  .sort('username')
  .exec(function(err, users){
    if (err){
      return next(err);
    }
    res.render('users/profile', {title: 'User profile'});
  });
});
router.post('/', function(req, res, next) {
  var p = new Person.create(req.body.person);
  var a = new Address.create(req.body.address);
  var l = new Login.create(req.body.login);
  console.log(p,a,l);
  var user = new User(req.body.user,l,a,p);

  user.save().then(function(){
    return res.send("User Registered with id "+ user.id);
  }).catch(next);
});

module.exports = router;
