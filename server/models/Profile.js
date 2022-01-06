const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const profileSchema = new mongoose.Schema({
  user_username: {
  },
  first_name: {
  },
  last_name: {
  },
  availability: {
    begin: Date,
    end: Date,
    days: {
      mon: {
        from: {
        },
        to: {
        },
      },
      tues: {
        from: {
        },
        to: {
        },
      },
      wed: {
        from: {
        },
        to: {
        },
      },
      thurs: {
        from: {
        },
        to: {
        },
      },
      fri: {
        from: {
        },
        to: {
        },
      },
      sat: {
        from: {
        },
        to: {
        },
      },
      sun: {
        from: {
        },
        to: {
        },
      },
    },
  },
  profile_picture: {
  },
  gender: {
  },
  birth_date: {
  },
  phone_number: {
  },
  address: {
  },
  description: {
  },
});

module.exports = Profile = mongoose.model("profile", profileSchema);
