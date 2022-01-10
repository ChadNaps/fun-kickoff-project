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
    validate: [
      function (value) {
        return this.from <= value;
      },
    ],
  },
});

const weekSchema = new mongoose.Schema({
  mon: [daySchema],
  tues: [daySchema],
  wed: [daySchema],
  thurs: [daySchema],
  fri: [daySchema],
  sat: [daySchema],
  sun: [daySchema],
});

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  availability: {
    begin: Date,
    end: Date,
    days: [weekSchema],
    required: true,
    validate: [
      function () {
        return this.begin.getTime() <= this.end.getTime();
      },
    ],
  },
  profilePicture: {
    type: Buffer,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    lowercase: true,
  },
  birthDate: {
    type: Date,
  },
  phoneNumber: {
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
