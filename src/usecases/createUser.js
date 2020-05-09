const { User } = require("../entities/User");

class CreateUser {
  constructor({ userRepo }) {
    this.userRepo = userRepo;
  }

  async createAndStoreUser(cur) {
    const user = this.createUserInstance(cur);
    const userRecord = await this.userRepo.add(user);
    return userRecord;
  }

  createUserInstance(cur) {
    const user = new User(cur);
    if (!user.isValid()) {
      throw new Error("bad user data");
    }
    return user;
  }
}

module.exports = CreateUser;
