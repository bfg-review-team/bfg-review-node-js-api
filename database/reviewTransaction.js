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
        const body_data = [values.UserName,values.Filmname,values.LastName,values.Email,values.Password,values.AvatarUrl]
        console.log('CallAddNewReview!')
        return queryAsync("INSERT INTO Users (UserName,FilmName,LastName,Email,Password,AvatarUrl) VALUES (?,?,?,?,?,?) ",body_data)   
    }
    deleteReview(values) {
        const body_data = [values.UserName,values.Email]
        console.log('Deleting This Review !')
        return queryAsync("DELETE FROM Users WHERE UserName = ? and Email = ? ",body_data)
    }
    updateReview(values) {
        const body_data = [values.UserName,values.Filmname,values.LastName,values.Email,values.Password,values.AvatarUrl,values.Id]
        console.log("Updating review was successfully")
        return queryAsync("UPDATE Users SET UserName = ?, FilmName = ?, LastName = ?, Email = ?, Password = ?, AvatarUrl = ? WHERE Id = ?",body_data)
    }
}

module.exports = ReviewTrancactions;