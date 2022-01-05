const { FadabHelper, queryAsync, insertAsync } = require("fadab-mysql-helper");

class ReviewTrancactions extends FadabHelper {
  constructor() {
    super();
    this.baseTable = "Reviews";
  }
  getAllReviews() {
    console.log("CallGetallReviews!");
    return queryAsync("SELECT * FROM Reviews");
  }
  getReview(Id) {
    console.log("Call GetReview!");
    return queryAsync("SELECT * FROM Reviews WHERE Id=? ", [Id]);
  }
  getUserReviews(UserId) {
    console.log("Call GetUserReview!");
    return queryAsync("SELECT * FROM Reviews WHERE UserId=? ", UserId);
  }
  getMovieReviews(values) {
    const body_data = [values.MovieId];
    console.log("Call GetUserReview!");
    return queryAsync("SELECT * FROM Reviews WHERE MovieId=? ", body_data);
  }
  addReview(values) {
    const body_data = [
      values.UserId,
      values.Title,
      values.MovieId,
      values.MessageText,
      values.ReviewLike,
      values.ReviewDislike,
      values.CreatedDate,
    ];
    console.log("CallAddNewReview!");
    return queryAsync(
      "INSERT INTO Reviews (UserId,Title,MovieId,MessageText,ReviewLike,ReviewDislike,CreatedDate) VALUES (?,?,?,?,?,?,?) ",
      body_data
    );
  }
  deleteReview(Id) {
    console.log("Deleting This Review !");
    return queryAsync("DELETE FROM Reviews WHERE Id = ? ", [Id]);
  }
  updateReview(values) {
    const body_data = [
      values.UserId,
      values.Title,
      values.MovieId,
      values.MessageText,
      values.ReviewLike,
      values.ReviewDislike,
      values.CreatedDate,
      values.Id,
    ];
    console.log("Updating review was successfully");
    return queryAsync(
      "UPDATE Reviews SET UserId = ?, Title = ?, MovieId = ?, MessageText = ?, ReviewLike = ?, ReviewDislike = ?, CreatedDate = ? WHERE Id = ?",
      body_data
    );
  }
  updateReviewLike(values) {
    const body_data = [values.ReviewLike, values.Id];
    console.log("Updating review was successfully");
    return queryAsync(
      "UPDATE Reviews SET ReviewLike = ? WHERE Id = ?",
      body_data
    );
  }
  updateReviewDislike(values) {
    const body_data = [values.ReviewDislike, values.Id];
    console.log("Updating review was successfully");
    return queryAsync(
      "UPDATE Reviews SET ReviewDislike = ? WHERE Id = ?",
      body_data
    );
  }
}

module.exports = ReviewTrancactions;
