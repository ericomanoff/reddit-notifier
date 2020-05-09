const { User } = require("../../entities/User");

describe("User Entity", () => {
  it("should create a valid user", () => {
    const user = new User({
      id: 1,
      name: "Garth",
      email: "garth@waynesworld.com",
    });

    expect(user.isValid()).toEqual(true);
  });

  it("should create a invalid user", () => {
    const user = new User({
      id: 1,
      email: "garth@waynesworld.com",
    });

    expect(user.isValid()).toEqual(false);
  });

  it("should create a invalid user given a missing email", () => {
    const user = new User({
      id: 1,
      name: "Flarp Garp",
    });

    expect(user.isValid()).toEqual(false);
  });
});
