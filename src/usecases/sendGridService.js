class SendGridService {
  constructor({ httpLib, api }) {
    this.httpLib = httpLib;
    this.api = api;
  }

  async postEmail() {
    const headers = {};

    const params = {};
    if (opts.limit) {
      params.limit = opts.limit;
    }

    const requestOptions = Object.assign({}, { headers }, { params });

    const url = `${this.api}/${thread}/${filter}.json`;

    if (process.env.ENV_MODE === "dev") {
      console.log("url: ", url);
      console.log("requestOptions: ", requestOptions);
    }

    const response = await this.httpLib.post(url, requestOptions);

    return response.data.response;
  }
}

module.exports = SendGridService;
