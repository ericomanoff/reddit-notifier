const makePostUser = require("./post-user-controller");

const { makeCreateUserReq, makeCreateUserRes } = require("../dto");

const { createUser } = require("../usecases");

const postUser = makePostUser({
  makeCreateUserReq,
  createUser,
  makeCreateUserRes,
});

module.exports = { postUser };
