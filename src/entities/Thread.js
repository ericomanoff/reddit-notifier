class Thread {
  constructor({ id, url }) {
    this.id = id;
    this.url = url;
  }

  isValid() {
    if (!this.id) {
      return false;
    }
    if (!this.url) {
      return false;
    }

    return true;
  }
}

module.exports = { Thread };
