class UserRepo {
  constructor({ userModel, database, moment }) {
    this.database = database;
    this.userModel = userModel;
    this.moment = moment;
  }

  async getAll(...args) {
    const users = await this.userModel.findAll(...args);
    return users;
  }

  async getById(id) {
    const user = await this.userModel.findOne({ where: { id } });
    return user;
  }

  async add(user) {
    const newUserData = await this.userModel.create(user);
    return newUserData.dataValues;
  }

  async updateById(userIdArray, updateObject) {
    const updatedUser = await this.userModel.update(updateObject, {
      where: { id: { [this.database.Sequelize.Op.in]: userIdArray } },
    });
    return updatedUser;
  }
}

module.exports = UserRepo;
