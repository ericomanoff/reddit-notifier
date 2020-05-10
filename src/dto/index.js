const validator = require("validator");
const cuid = require("cuid");
const buildMakeCreateUserReq = require("./makeCreateUserReq");
const buildMakeCreateUserRes = require("./makeCreateUserRes");

const makeCreateUserReq = buildMakeCreateUserReq({ validator, makeId: cuid });
const makeCreateUserRes = buildMakeCreateUserRes();

module.exports = {
  makeCreateUserReq,
  makeCreateUserRes,
};
