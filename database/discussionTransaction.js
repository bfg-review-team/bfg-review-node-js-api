const { FadabHelper , queryAsync, insertAsync } = require("fadab-mysql-helper");

class DiscussionTrancactions extends FadabHelper{
    constructor() {
        super();
        this.baseTable = "Discussions";
    }
    getAllDiscussions() {
        console.log('CallGetallDiscussions!')
        return queryAsync("SELECT * FROM Discussions")
    }
    getDiscussion(values) {
        const body_data = [values.Id]
        console.log('Call GetDiscussion!')
        return queryAsync("SELECT * FROM Discussions WHERE Id=? ",body_data)
    }
    getUserDiscussions(values) {
        const body_data = [values.UserId]
        console.log('Call GetUserDiscussion!')
        return queryAsync("SELECT * FROM Discussions WHERE UserId=? ",body_data)
    }
    getMovieDiscussions(values) {
        const body_data = [values.MovieId]
        console.log('Call GetMovieDiscussions!')
        return queryAsync("SELECT * FROM Discussions WHERE MovieId=? ",body_data)
    }
    addDiscussion(values) {
        const body_data = [
            values.UserId,
            values.Name,
            values.MovieId,
            values.CreatedDate
        ]
        console.log('CallAddNewDiscussion!')
        return queryAsync("INSERT INTO Discussions (UserId,Name,MovieId,CreatedDate) VALUES (?,?,?,?) ",body_data)   
    }
    deleteDiscussion(values) {
        const body_data = [values.Id]
        console.log('Deleting This Discussion !')
        return queryAsync("DELETE FROM Discussions WHERE Id = ? ",body_data)
    }
    updateDiscussion(values) {
        const body_data = [
            values.UserId,
            values.Name,
            values.MovieId,
            values.CreatedDate,
            values.Id
        ]
        console.log("Updating Discussion was successfully")
        return queryAsync("UPDATE Discussions SET UserId = ?, Name = ?, MovieId = ?,CreatedDate = ? WHERE Id = ?",body_data)
    }
}

module.exports = DiscussionTrancactions;