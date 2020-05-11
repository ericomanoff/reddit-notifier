const { Thread } = require("../entities/Thread");

class AddThreadToUser {
  constructor({ threadRepo }) {
    this.threadRepo = threadRepo;
  }

  async associateThreadToUser(userId, threadUrl) {
    const thread = new Thread({ id: "somethreadId", url: threadUrl });
    const threadRecord = await this.threadRepo.addThreadWithUser(
      userId,
      thread
    );
    return threadRecord;
  }
}

module.exports = AddThreadToUser;
