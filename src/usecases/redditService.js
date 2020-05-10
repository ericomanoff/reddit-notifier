class RedditService {
  constructor({ httpLib, api }) {
    this.httpLib = httpLib;
    this.api = api;
  }

  async getThreadJSON(thread, filter, opts) {
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

    const response = await this.httpLib.get(url, requestOptions);

    return response.data.response;
  }

  // eslint-disable-next-line class-methods-use-this
  asArray(permissionsObject) {
    return Object.keys(permissionsObject);
  }
}

module.exports = RedditService;
