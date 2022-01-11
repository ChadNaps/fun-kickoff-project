const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
    getProfile,
    getAllProfiles,
    updateProfile,
    createProfile
} = require("../controllers/profile");

router.route("/profile/:userID").get(getProfile);

router.route("/profiles").get(getAllProfiles);

router.route("/profile/:userID/update").patch(protect, updateProfile);

router.route("/profile/create").post(createProfile);

module.exports = router;