const CreateUser = require("../../usecases/createUser");

describe("createUser UseCase", () => {
  const userData = {};
  const userRepo = {
    add: jest.fn(() => userData),
  };
  const createUser = new CreateUser({ userRepo });

  it("should call addUser on the userRepository", () => {
    let createUserReq = {
      id: 1,
      name: "Bill Braskey",
      email: "bill@legend.com",
    }; // this will come from the controller
    const user = createUser.createAndStoreUser(createUserReq);
    expect(userRepo.add.mock.calls.length).toBe(1);
  });

  it("throws error given invalid user", async () => {
    await expect(createUser.createAndStoreUser({})).rejects.toThrow(
      "bad user data"
    );
  });
});
