const { CreateUser } = require("../../usecases/user/createUser");

describe("createUser UseCase", () => {
  const userData = {};
  const userRepository = {
    addUser: jest.fn(() => userData),
  };
  const createUser = new CreateUser({ userRepository });
  it("should call addUser on the userRepository", () => {
    let createUserReq = {
      id: 1,
      name: "Bill Braskey",
      email: "bill@legend.com",
    }; // this will come from the controller
    const user = createUser.createAndStoreUser(createUserReq);
    expect(userRepository.addUser.mock.calls.length).toBe(1);
  });

  it("should throw an error given an invalid createUserRequest", () => {
    let createUserReq = {}; // this will come from the controller
    expect(() => {
      const user = createUser.createAndStoreUser(createUserReq);
    }).toThrow();
  });
});
