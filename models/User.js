const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: /.+\@.+\..+/,
    unique: true,
  },
  dob: {
    type: String,
    required: [true, "Date of Birth is required."],
    match: /^(0[1-9]1[0-2])\/(0[1-9]1\d|2\d|3[01])\/(19|20)\d{2}$/,
    unique: true
  },
  //Add matched (with other users) property

});

module.exports = mongoose.model('User', UserSchema)