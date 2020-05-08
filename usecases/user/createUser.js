const { User } = require("../../entities/User");

class CreateUser {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  createAndStoreUser(cur) {
    const user = this.createUserInstance(cur);
    const userRecord = this.userRepository.addUser(user);
    return userRecord;
  }

  createUserInstance(cur) {
    const user = new User(cur);
    if (!user.isValid()) {
      throw new Error("unable to create user instance");
    }
    return user;
  }
}

module.exports = { CreateUser };
