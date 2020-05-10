const { makeCreateUserReq } = require("../../dto");

describe("makeCreateUserReq", () => {
  it("should create a user dto from a http req", () => {
    const req = {
      body: {
        name: "Eric Omanoff",
        email: "eric.omanoff@gmail.com",
      },
    };

    const cur = makeCreateUserReq(req);
    expect(cur.name).toEqual("Eric Omanoff");
  });
});
