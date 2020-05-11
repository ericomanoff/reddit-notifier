const { CronJob } = require("cron");

const { sendTopPostEmail } = require("./usecases");

const job = new CronJob("00 08 00 * * *", function () {
  const d = new Date();
  sendTopPostEmail();
});

job.start();
