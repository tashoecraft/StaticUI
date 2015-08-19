var express = require('express');
var router = express.Router();
var Hotel = require('mongoose').model('Hotel');
var Restaurant = require('mongoose').model('Restaurant');
var Activity = require('mongoose').model('Activity');

// function eHandler(err) {console.error(err)};

/* GET home page. */
router.get('/', function(req, res, next) {
  var temp = [  Hotel.find({}).exec(), Restaurant.find({}).exec(), Activity.find({}).exec()];
    Promise.all(temp).then( function(elements){
      res.render('index', {
          all_hotels: elements[0],
          all_restaurants: elements[1],
          all_activities: elements[2]
    });
}).catch(null, console.log);

});

router.use('/bower_components', express.static('bower_components')
);

module.exports = router;
