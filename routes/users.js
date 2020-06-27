var express = require('express');
var mongoose = require("mongoose");
var router = express.Router();
var User = mongoose.model('User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({})
  .sort('username')
  .exec(function(err, users){
    if (err){
      return next(err);
    }
    res.send(users);
  });
});
router.post('/', function(req, res, next) {
  var user = new User();

  user.username = req.body.username;
  user.email = req.body.email;
  user.bio = req.body.bio;

  user.save().then(function(){
    return res.send("User Registered with id "+ user.id);
  }).catch(next);
});

module.exports = router;
