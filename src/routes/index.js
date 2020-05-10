const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const makeCallBack = require("./make-express-callback");
const { postUser } = require("../controllers");
const jsonParser = bodyParser.json();

router.post("/user", jsonParser, makeCallBack(postUser));

module.exports = router;
