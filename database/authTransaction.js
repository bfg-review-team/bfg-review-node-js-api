const { FadabHelper, queryAsync, insertAsync } = require("fadab-mysql-helper");

class AuthTrancactions extends FadabHelper {
  constructor() {
    super();
    this.baseTable = "Users";
  }

  addUser(values) {
    const body_data = [
      values.UserName,
      values.FirstName,
      values.LastName,
      values.Email,
      values.Password,
      values.AvatarUrl,
    ];
    console.log("CallAddNewUser!");
    return queryAsync(
      "INSERT INTO Users (UserName,FirstName,LastName,Email,Password,AvatarUrl) VALUES (?,?,?,?,?,?) ",
      body_data
    );
  }
}

module.exports = AuthTrancactions;
