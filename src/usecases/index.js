const CreateUser = require("./createUser");
const { userRepo } = require("../repositories");

const createUser = new CreateUser({ userRepo });

module.exports = { createUser };
