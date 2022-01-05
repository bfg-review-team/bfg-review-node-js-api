const { FadabHelper, queryAsync, insertAsync } = require("fadab-mysql-helper");

class UserTrancactions extends FadabHelper {
  constructor() {
    super();
    this.baseTable = "Users";
  }
  getAllUser() {
    console.log("CallGetallusers!");
    return queryAsync("SELECT * FROM Users");
  }
  getUser(Id) {
    console.log("Call Getuser!", Id);
    return queryAsync("SELECT * FROM Users WHERE Id = ? ", Id);
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
  deleteUser(Id) {
    console.log("Deleting This User !");
    return queryAsync("DELETE FROM Users WHERE Id = ? ", Id);
  }
  updateUser(values) {
    const body_data = [
      values.UserName,
      values.FirstName,
      values.LastName,
      values.Email,
      values.Password,
      values.AvatarUrl,
      values.Id,
    ];
    console.log("Updating was successfully");
    return queryAsync(
      "UPDATE Users SET UserName = ?, FirstName = ?, LastName = ?, Email = ?, Password = ?, AvatarUrl = ? WHERE Id = ?",
      body_data
    );
  }
}

module.exports = UserTrancactions;
