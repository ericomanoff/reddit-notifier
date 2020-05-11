class ThreadRepo {
  constructor({ threadModel, database, moment }) {
    this.database = database;
    this.threadModel = threadModel;
    this.moment = moment;
  }

  async getAll(...args) {
    const users = await this.threadModel.findAll(...args);
    return users;
  }

  async getById(id) {
    const thread = await this.threadModel.findOne({ where: { id } });
    return thread;
  }

  async addThreadWithUser(userId, thread) {
    return this.database.sequelize
      .transaction((t) =>
        this.threadModel
          .findOrCreate({
            thread,
            where: { url: thread.url },
            transaction: t,
          })
          .then((thread) =>
            thread.setUser(userId, {
              transaction: t,
            })
          )
      )
      .then((result) => result)
      .catch((err) =>
        console.log("error on add thread with user ", err.message)
      );
  }
}

module.exports = ThreadRepo;
