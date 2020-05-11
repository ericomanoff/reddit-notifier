const CreateUser = require("../usecases/createUser");
const UserRepo = require("../repositories/UserRepo");
const AddThreadToUser = require("../usecases/AddThreadToUser");
const ThreadRepo = require("../repositories/ThreadRepo");
const { User: UserModel, Thread: ThreadModel } = require("../models");
const db = require("../models");

const userRepo = new UserRepo({
  userModel: UserModel,
  database: db,
});

const createUser = new CreateUser({ userRepo });

const threadRepo = new ThreadRepo({
  threadModel: ThreadModel,
  database: db,
});

const addThreadToUser = new AddThreadToUser({ threadRepo });

beforeAll(function () {
  if (["test", "ci"].includes(process.env.NODE_ENV)) {
    db.User.destroy({ truncate: { cascade: false } });
    db.Thread.destroy({ truncate: { cascade: false } });
  }
});
afterAll(function () {
  return db.sequelize.close();
});

describe("adds a thread to a user", () => {
  it("creates and stores a user", async () => {
    const userRecord = await createUser.createAndStoreUser({
      id: "someUniqueId",
      name: "Charles Charlson",
      email: "me@charlson.com",
    });
    expect(userRecord).toHaveProperty("name", "Charles Charlson");
    expect(userRecord).toHaveProperty("email", "me@charlson.com");

    const thread = await addThreadToUser.associateThreadToUser(
      userRecord.id,
      "r/aww"
    );
    expect(thread).toHaveProperty("url", "r/aww");
  });
});
