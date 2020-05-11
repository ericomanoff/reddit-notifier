class SendTopPostEmail {
  constructor({ userRepo, threadRepo, redditService, sendGridService }) {
    this.userRepo = userRepo;
    this.threadRepo = threadRepo;
    this.redditService = redditService;
    this.sendGridService = sendGridService;
  }

  async sendEmails() {
    //get all users with active accounts
    const usersWithThreadsArray = await this.userRepo.getUsersAndThreads({
      active: true,
    });

    usersWithThreadsArray.forEach((user) => {
      topPosts = {};
      user.threads.forEach((thread) => {
        const postArray = this.redditService.getThreadJSON(thread, top, {
          limit: 3,
        });

        topPosts[thread] = postArray;
      });

      this.sendGridService.sendEmail({
        to: user.email,
        body: topPosts,
      });
    });
  }
}

module.exports = SendTopPostEmail;
