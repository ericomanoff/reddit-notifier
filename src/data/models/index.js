const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.ENV_MODE || "prod";
// eslint-disable-next-line import/no-dynamic-require
const config = require(`${__dirname}/../config/config.json`);
let envConfig;
switch (env) {
  case "test":
    envConfig = config.test;
    break;
  case "dev":
    envConfig = config.development;
    break;
  case "stage":
    envConfig = config.stage;
    break;
  case "prod":
    envConfig = config.production;
    break;
  default:
    envConfig = config.production;
    break;
}
const db = {};
const sequelize = new Sequelize(
  envConfig.database,
  envConfig.username,
  envConfig.password,
  envConfig
);
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
