const { FadabHelper, queryAsync, insertAsync } = require("fadab-mysql-helper");

class DiscussionTrancactions extends FadabHelper {
  constructor() {
    super();
    this.baseTable = "Discussions";
  }
  getAllDiscussions() {
    console.log("CallGetallDiscussions!");
    return queryAsync("SELECT * FROM Discussions").catch((e) => {
      console.log(e);
    });
  }
  getDiscussion(Id) {
    console.log("Call GetDiscussion!");
    return queryAsync(`SELECT * FROM Discussions WHERE Id=${Id}`);
  }
  getUserDiscussions(userId) {
    console.log("Call GetUserDiscussion!");
    return queryAsync(`SELECT * FROM Discussions WHERE UserId=${userId}`);
  }
  getMovieDiscussions(movieId) {

    console.log("Call GetMovieDiscussions!");
    return queryAsync(`SELECT * FROM DiscussionUser WHERE MovieId=${movieId}`);
  }
  addDiscussion(values) {
    const body_data = [
      values.UserId,
      values.Name,
      values.MovieId,
      values.CreatedDate,
    ];
    console.log("CallAddNewDiscussion!");
    return queryAsync(
      "INSERT INTO Discussions (UserId,Name,MovieId,CreatedDate) VALUES (?,?,?,?) ",
      body_data
    );
  }
  deleteDiscussion(Id) {
    console.log("Deleting This Discussion !");
    return queryAsync("DELETE FROM Discussions WHERE Id = ? ", Id);
  }
  updateDiscussion(values) {
    const body_data = [
      values.UserId,
      values.Name,
      values.MovieId,
      values.CreatedDate,
      values.Id,
    ];
    console.log("Updating Discussion was successfully");
    return queryAsync(
      "UPDATE Discussions SET UserId = ?, Name = ?, MovieId = ?,CreatedDate = ? WHERE Id = ?",
      body_data
    );
  }
}

module.exports = DiscussionTrancactions;
