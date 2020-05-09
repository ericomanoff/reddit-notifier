const CreateUser = require("../usecases/createUser");
const UserRepo = require("../repositories/UserRepo");
const { User: UserModel } = require("../models");
const db = require("../models");

const userRepo = new UserRepo({
  userModel: UserModel,
  database: db,
});

const createUser = new CreateUser({ userRepo });
beforeAll(function () {
  if (["test", "ci"].includes(process.env.NODE_ENV)) {
    return db.User.destroy({ truncate: { cascade: false } });
  }
});
afterAll(function () {
  return db.sequelize.close();
});

describe("CreateUser UseCase", () => {
  it("throws error given invalid user", async () => {
    await expect(createUser.createAndStoreUser({})).rejects.toThrow(
      "bad user data"
    );
  });

  it("creates and stores a user", async () => {
    const userRecord = await createUser.createAndStoreUser({
      id: "someUniqueId",
      name: "Charles Charlson",
      email: "me@charlson.com",
    });
    expect(userRecord).toHaveProperty("name", "Charles Charlson");
    expect(userRecord).toHaveProperty("email", "me@charlson.com");
  });
});
