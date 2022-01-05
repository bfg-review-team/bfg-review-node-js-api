const { FadabHelper, queryAsync, insertAsync } = require("fadab-mysql-helper");

class MessageTrancactions extends FadabHelper {
  constructor() {
    super();
    this.baseTable = "Messages";
  }
  getAllMessages() {
    console.log("CallGetallMessages!");
    return queryAsync("SELECT * FROM Messages");
  }
  getMessage(Id) {
    console.log("Call GetMessage!");
    return queryAsync("SELECT * FROM Messages WHERE Id=? ", Id);
  }
  getUserMessages(values) {
    const body_data = [values.UserId];
    console.log("Call GetUserMessage!");
    return queryAsync("SELECT * FROM Messages WHERE UserId=? ", body_data);
  }
  getDiscussionMessages(values) {
    const body_data = [values.DiscussionId];
    console.log("Call GetDiscussionMessage!");
    return queryAsync(
      "SELECT * FROM Messages WHERE DiscussionId=? ",
      body_data
    );
  }
  addMessage(values) {
    const body_data = [
      values.UserId,
      values.MessageText,
      values.DiscussionId,
      values.CreatedDate,
    ];
    console.log("CallAddNewMessage!");
    return queryAsync(
      "INSERT INTO Messages (UserId,MessageText,DiscussionId,CreatedDate) VALUES (?,?,?,?) ",
      body_data
    );
  }
  deleteMessage(Id) {
    console.log("Deleting This Message !");
    return queryAsync("DELETE FROM Messages WHERE Id = ? ", Id);
  }
  updateMessage(values) {
    const body_data = [
      values.UserId,
      values.MessageText,
      values.DiscussionId,
      values.CreatedDate,
      values.Id,
    ];
    console.log("Updating Message was successfully");
    return queryAsync(
      "UPDATE Messages SET UserId = ?, MessageText = ?, DiscussionId = ?,CreatedDate = ? WHERE Id = ?",
      body_data
    );
  }
}

module.exports = MessageTrancactions;
