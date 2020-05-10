const axios = require("axios");
const RedditService = require("./redditService");
const SendGridService = require("./sendGridService");
const CreateUser = require("./createUser");
const { userRepo } = require("../repositories");
const config = require("../config.json");
const credentials = require("../credentials.json");
const environment = process.env.NODE_ENV || "dev";
const environmentConfig = config[environment];
const environmentCreds = credentials[environment];

const { REDDIT_API, SENDGRID_API } = environmentConfig;
const createUser = new CreateUser({ userRepo });
const redditService = new RedditService({ httpLib: axios, api: REDDIT_API });
const sendGridService = new SendGridService({
  httpLib: axios,
  api: SENDGRID_API,
  creds: environmentCreds,
});

module.exports = { createUser, redditService, sendGridService };
