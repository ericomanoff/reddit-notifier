const axios = require("axios");
const sgMail = require("@sendgrid/mail");
const RedditService = require("./redditService");
const SendGridService = require("./sendGridService");
const CreateUser = require("./createUser");
const { userRepo } = require("../repositories");
const config = require("../config.json");
const credentials = require("../credentials.json");
const environment = process.env.NODE_ENV || "dev";
const environmentConfig = config[environment];
const environmentCreds = credentials[environment];

const { REDDIT_API, SENDGRID_API_KEY } = environmentConfig;
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const createUser = new CreateUser({ userRepo });
const redditService = new RedditService({ httpLib: axios, api: REDDIT_API });
const sendGridService = new SendGridService({
  httpLib: axios,
  sgMail,
});

module.exports = { createUser, redditService, sendGridService };
