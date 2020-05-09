class User {
  constructor({ id, name, email }) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  isValid() {
    if (!this.id) {
      return false;
    }
    if (!this.name) {
      return false;
    }
    if (!this.email) {
      return false;
    }

    return true;
  }
}

module.exports = { User };
