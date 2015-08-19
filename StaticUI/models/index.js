var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/StaticUI');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var Place, Hotel, Activity, Restaurant, Day;

var placeSchema = new Schema({
  address: { type: String, required: true },
  city: String,
  state:   String,
  phone: { type: String, required: true },
  location: { type: Date, default: Date.now }
});
