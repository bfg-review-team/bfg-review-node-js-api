const { FadabHelper, queryAsync, insertAsync } = require("fadab-mysql-helper");

class ListTrancactions extends FadabHelper {
  constructor() {
    super();
    this.baseTable = "Lists";
  }
  getAllLists() {
    console.log("CallGetallLists!");
    return queryAsync("SELECT * FROM Lists");
  }
  getList(Id) {
    console.log("Call GetList!");
    return queryAsync("SELECT * FROM Lists WHERE Id=? ", [Id]);
  }
  getUserLists(values) {
    const body_data = [values.UserId];
    console.log("Call GetUserList!");
    return queryAsync("SELECT * FROM Lists WHERE UserId=? ", body_data);
  }
  getMovieLists(values) {
    const body_data = [values.MovieId];
    console.log("Call GetMovieList!");
    return queryAsync("SELECT * FROM Lists WHERE MovieId=? ", body_data);
  }
  addList(values) {
    const body_data = [values.ListType, values.UserId, values.MovieId];
    console.log("CallAddNewList!");
    return queryAsync(
      "INSERT INTO Lists (ListType,UserId,MovieId) VALUES (?,?,?) ",
      body_data
    );
  }
  deleteList(Id) {
    console.log("Deleting This List !");
    return queryAsync("DELETE FROM Lists WHERE Id = ? ", [Id]);
  }
  updateList(values) {
    const body_data = [
      values.ListType,
      values.UserId,
      values.MovieId,
      values.Id,
    ];
    console.log("Updating List was successfully");
    return queryAsync(
      "UPDATE Lists SET ListType = ?, UserId = ?, MovieId = ? WHERE Id = ?",
      body_data
    );
  }
}

module.exports = ListTrancactions;
