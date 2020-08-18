var express = require('express');
var mongoose = require("mongoose");
var router = express.Router();
// var Money = mongoose.model('money');
// var Currency = mongoose.model('currency');
var Money = require('../models/Money');
var Login = require('../models/User/Login');
var Person = require('../models/User/Person');
var Currency = require('../models/Currency');
var Transactionaction = require('../models/Transactionaction');
var User = require('../models/User/User');
// var Loger = mongoose.model('logermodel');
var Loger = require('../models/Loger');

/* GET users listing. */
router.get('/currency/', function (req, res, next) {
  Currency.find({})
    .exec(function (err, currency) {
      if (err) {
        return next(err);
      }
      res.send(currency);
    });
});
router.get('/currency/:shortname', function (req, res, next) {
  console.log("Getting currency with short name: " + req.shortname);
  Currency.findOne({ currencyshortname: req.params.shortname }, function (err, currency) {
    if (err) {
      return next(err);
    }
    res.send(currency.currencyname);
  });
});
router.post('/currency/', function (req, res, next) {
  var currency = new Currency();

  currency.currencyname = req.body.currencyname;
  currency.currencyshortname = req.body.currencyshortname;
  currency.currencysymbol = req.body.currencysymbol;
  currency.country = req.body.country;

  currency.save().then(function () {
    return res.send("User Registered with id " + currency.id);
  }).catch(next);
});

router.get('/loger/', function (req, res, next) {
  Loger.find()
    .exec(function (err, log) {
      if (err) {
        return next(err);
      }
      res.send(log);
    });
})
router.post('/loger/', function (req, res, next) {
  // var log = new Loger(req.body);
  var log = Loger.create(req.body);
  if (log.error) {
    return res.send("Error in validation" + log.error);
  }
  log.save().then(function () {
    return res.send("User Registered with id " + log);
  }).catch(next);

})
router.get('/person/', function (req, res, next) {
  Person.find()
  .exec(function(err, log){
    if (err){
      return next(err);
    }
    res.send(log);
  });
  // return getter(Person);
})
function getter(cla, res) {
  cla.find()
    .exec(function (err, log) {
      if (err) {
        return next(err);
      }
      return res.send(log);
    });
}
// router.post('/user/', function (req, res, next) {
//   return poster(Person, req, res, next);
// })
router.post('/person/', function (req, res, next) {
  // var log = new Loger(req.body);
  // var per= Person.create(req.body);
  // if(per.error){
  //   return res.send("Error in validation"+per.error);
  // }
  // per.save().then(function(){
  //   return res.send("User Registered with id "+ per);
  // }).catch(next);
  return poster(Person, req, res, next);
})
function poster(cla, req, res, next) {
  var c = cla.create(req.body);
  if (c.error) {
    return res.send("Error in validation" + c.error);
  }
  c.save().then(function () {
    return res.send("User Registered with id " + c);
  }).catch(next);
}
/* GET users listing. */
router.get('/', function (req, res, next) {
  Money.find().populate('currency').select('amount currency')
    .exec(function (err, money) {
      if (err) {
        return next(err);
      }
      res.send(money);
    });
});
router.post('/', function (req, res, next) {
  var money = new Money();
  console.log("Amount: " + req.body.amount + " Currency is: " + req.body.currency);
  money.amount = req.body.amount;
  currid = null;
  Currency.findOne({ currencyshortname: req.body.currency }, function (err, currency) {
    if (err) {
      return next(err);
    }
    console.log("Currency id : " + currency._id);
    money.currency = currency._id;
    currid = currency._id;
    console.log('curr id =', currid);
    money.currency = currid;
    console.log("money currency :" + typeof (money.currency));
    // res.send(money);
    money.save().then(function () {
      return res.send("User Registered with id " + money);
    }).catch(next);
  });

});

module.exports = router;
