class SendGridService {
  constructor({ httpLib, api, sgMail }) {
    this.httpLib = httpLib;
    this.api = api;
  }

  async sendEmail({ to, body }) {
    const msg = {
      to: to,
      from: "test@example.com",
      subject: "Top Posts from Reddit",
      text: body,
    };

    sgMail.send(msg);
  }
}

module.exports = SendGridService;
