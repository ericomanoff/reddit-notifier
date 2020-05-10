const UserRepo = require("./UserRepo");
const { User: userModel } = require("../models");

const userRepo = new UserRepo({ userModel });
module.exports = { userRepo };
