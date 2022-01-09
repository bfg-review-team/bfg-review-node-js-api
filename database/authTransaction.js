const { FadabHelper, queryAsync, insertAsync } = require("fadab-mysql-helper");

class AuthTrancactions extends FadabHelper {
  constructor() {
    super();
    this.baseTable = "Users";
  }
}

module.exports = AuthTrancactions;
