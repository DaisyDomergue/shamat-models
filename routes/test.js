var express = require('express');
var mongoose = require("mongoose");
var router = express.Router();
var Money = mongoose.model('Money');
var Currency = mongoose.model('Currency');

/* GET users listing. */
router.get('/currency/', function(req, res, next) {
  Currency.find({})
  .exec(function(err, currency){
    if (err){
      return next(err);
    }
    res.send(currency);
  });
});
router.get('/currency/:shortname', function(req, res, next) {
    console.log("Getting currency with short name: " + req.shortname );
    Currency.findOne({currencyshortname:req.params.shortname},function(err, currency){
      if (err){
        return next(err);
      }
      res.send(currency.currencyname);
    });
  });
router.post('/currency/', function(req, res, next) {
  var currency = new Currency();

  currency.currencyname = req.body.currencyname;
  currency.currencyshortname = req.body.currencyshortname;
  currency.currencysymbol = req.body.currencysymbol;
  currency.country = req.body.country;

  currency.save().then(function(){
    return res.send("User Registered with id "+ currency.id);
  }).catch(next);
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  Money.find({})
  .exec(function(err, money){
    if (err){
      return next(err);
    }
    res.send(money);
  });
});
router.post('/', function(req, res, next) {
  var money = new Money();
  console.log("Amount: "+req.body.amount+" Currency is: "+req.body.currency);
  money.amount = req.body.amount;
  Currency.findOne({currencyshortname:req.body.currency},function(err, currency){
    if (err){
      return next(err);
    }
    console.log("Currency id : "+ currency._id);
    money.currency = currency.id;
  });
//   console.log(c.ObjectID);
  money.currency = Currency.findOne({currencyshortname:req.body.currency});
  res.send(money);
//   money.save().then(function(){
//     return res.send("User Registered with id "+ money.id);
//   }).catch(next);
});

module.exports = router;
