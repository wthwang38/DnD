const mongoose = require('mongoose');

const RestaurantSchema = mongoose.Schema({
  name: {
    type:String,
    required: [true, 'Name is required.']
  },
  address: {
    type:String,
    required: [true, 'Address is required.']
  },
  zipCode: {
    type: String,
    required: [true, 'Zipcode is required.']
  }
})

module.exports = mongoose.model("Restaurant", RestaurantSchema);