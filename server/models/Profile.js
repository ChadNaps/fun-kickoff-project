const mongoose = require("mongoose");

const daySchema = new mongoose.Schema({
  from: {
    type: Number,
    min: 0,
    max: 2359,
  },
  to: {
    type: Number,
    min: 0,
    max: 2359,
  }
});

const weekSchema = new mongoose.Schema({
  mon: daySchema,
  tues: daySchema,
  wed: daySchema,
  thurs: daySchema,
  fri: daySchema,
  sat: daySchema,
  sun: daySchema
});

const profileSchema = new mongoose.Schema({
  user_username: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  availability: {
    begin: Date,
    end: Date,
    days: [weekSchema],
    required: true,
  },
  profile_picture: {
    type: Buffer,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    lowercase: true,
  },
  birth_date: {
    type: Date,
  },
  phone_number: {
    type: String,
    maxLength: 25,
  },
  address: {
    type: String,
    maxLength: 1000,
  },
  description: {
    type: String,
    maxLength: 3000,
  },
});

module.exports = Profile = mongoose.model("Profile", profileSchema);
