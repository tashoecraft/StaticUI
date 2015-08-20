var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/StaticUI');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var Place, Hotel, Activity, Restaurant, Day;
var Schema = mongoose.Schema;

var placeSchema = new Schema({
  address: String,
  city: String,
  state:   String,
  phone: String,
  location: [Number]
});

var hotelSchema = new Schema({
  name: { type: String, required: true },
  place: [placeSchema],
  num_stars:   {type: Number, min: 1, max:5},
  amenities: [String]
});

var activitySchema = new Schema({
  name: { type: String, required: true },
  place: [placeSchema],
  age_range: String
});

var restaurantSchema = new Schema({
  name: { type: String, required: true },
  place: [placeSchema],
  cuisines:   String,
  price: { type: String, required: true }
});

Place = mongoose.model('Place', placeSchema);
Hotel = mongoose.model('Hotel', hotelSchema);
Activity = mongoose.model('Activity', activitySchema);
Restaurant = mongoose.model('Restaurant', restaurantSchema);
// Day = mongoose.model('Day', daySchema);

module.exports = {
  Place: Place,
  Hotel: Hotel,
  Activity: Activity,
  Restaurant: Restaurant
  // Day: Day
};
