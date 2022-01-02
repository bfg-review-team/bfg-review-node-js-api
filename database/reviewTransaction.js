const { FadabHelper , queryAsync, insertAsync } = require("fadab-mysql-helper");

class ReviewTrancactions extends FadabHelper{
    constructor() {
        super();
        this.baseTable = "Reviews";
    }
    getAllReviews() {
        console.log('CallGetallReviews!')
        return queryAsync("SELECT * FROM Reviews")
    }
    getReview(values) {
        const body_data = [values.Id]
        console.log('Call GetReview!')
        return queryAsync("SELECT * FROM Reviews WHERE Id=? ",body_data)
    }
    getUserReviews(values) {
        const body_data = [values.UserId]
        console.log('Call GetUserReview!')
        return queryAsync("SELECT * FROM Reviews WHERE UserId=? ",body_data)
    }
    addReview(values) {
        const body_data = [
            values.UserId,
            values.Title,
            values.MovieId,
            values.MessageText,
            values.ReviewLike,
            values.ReviewDislike,
            values.CreatedDate
        ]
        console.log('CallAddNewReview!')
        return queryAsync("INSERT INTO Reviews (UserId,Title,MovieId,MessageText,ReviewLike,ReviewDislike,CreatedDate) VALUES (?,?,?,?,?,?,?) ",body_data)   
    }
    deleteReview(values) {
        const body_data = [values.Id]
        console.log('Deleting This Review !')
        return queryAsync("DELETE FROM Reviews WHERE Id = ? ",body_data)
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
            values.Id
        ]
        console.log("Updating review was successfully")
        return queryAsync("UPDATE Reviews SET UserId = ?, Title = ?, MovieId = ?, MessageText = ?, ReviewLike = ?, ReviewDislike = ?, CreatedDate = ? WHERE Id = ?",body_data)
    }
    updateReviewLike(values) {
        const body_data = [
            values.ReviewLike,
            values.Id
        ]
        console.log("Updating review was successfully")
        return queryAsync("UPDATE Reviews SET ReviewLike = ? WHERE Id = ?",body_data)
    }
    updateReviewDislike(values) {
        const body_data = [
            values.ReviewDislike,
            values.Id
        ]
        console.log("Updating review was successfully")
        return queryAsync("UPDATE Reviews SET ReviewDislike = ? WHERE Id = ?",body_data)
    }
}

module.exports = ReviewTrancactions;