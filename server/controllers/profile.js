const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");

// @route GET /profile/:userID
// @desc Get profile of user with provided ID
// @access Public
exports.getProfile = asyncHandler(async (req, res, next) => {
    // TODO
});

// @route GET /profiles
// @desc Get profiles of all users
// @access Public
exports.getAllProfiles = asyncHandler(async (req, res, next) => {
    // TODO
});

// @route PATCH /profile/:userID/update
// @desc Update profile of provided userID with provided parameters
// @access Private
exports.getProfile = asyncHandler(async (req, res, next) => {
    // TODO
});

// @route POST /profile/create
// @desc Create new user profile
// @access Public
exports.getProfile = asyncHandler(async (req, res, next) => {
    // TODO
});