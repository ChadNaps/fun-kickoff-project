const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
    days: {
      mon: {
        from: {
          type: Number,
          min: 0,
          max: 2359,
        },
        to: {
          type: Number,
          min: 0,
          max: 2359,
        },
      },
      tues: {
        from: {
          type: Number,
          min: 0,
          max: 2359,
        },
        to: {
          type: Number,
          min: 0,
          max: 2359,
        },
      },
      wed: {
        from: {
          type: Number,
          min: 0,
          max: 2359,
        },
        to: {
          type: Number,
          min: 0,
          max: 2359,
        },
      },
      thurs: {
        from: {
          type: Number,
          min: 0,
          max: 2359,
        },
        to: {
          type: Number,
          min: 0,
          max: 2359,
        },
      },
      fri: {
        from: {
          type: Number,
          min: 0,
          max: 2359,
        },
        to: {
          type: Number,
          min: 0,
          max: 2359,
        },
      },
      sat: {
        from: {
          type: Number,
          min: 0,
          max: 2359,
        },
        to: {
          type: Number,
          min: 0,
          max: 2359,
        },
      },
      sun: {
        from: {
          type: Number,
          min: 0,
          max: 2359,
        },
        to: {
          type: Number,
          min: 0,
          max: 2359,
        },
      },
    },
    required: true,
  },
  profile_picture: {
    type: Buffer,
  },
  gender: {
    type: String,
    maxLength: 20,
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

module.exports = Profile = mongoose.model("profile", profileSchema);
