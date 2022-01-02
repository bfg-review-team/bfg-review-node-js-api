const { FadabHelper , queryAsync, insertAsync } = require("fadab-mysql-helper");

class UserTrancactions extends FadabHelper{
    constructor() {
        super();
        this.baseTable = "Users";
    }
    getAllUser() {
        console.log('CallGetallusers!')
        return queryAsync("CALL GetAllUsers()")
    }
    getUser(values) {
        const body_data = [values.UserName,values.Pasword]
        console.log('Call Getuser!')
        return queryAsync("SELECT * FROM Users WHERE UserName= ? And Password = ? ",body_data)
    }
    addUser(values) {
        const body_data = [values.UserName,values.Filmname,values.LastName,values.Email,values.Password,values.AvatarUrl]
        console.log('CallAddNewUser!')
        return queryAsync("INSERT INTO Users (UserName,FilmName,LastName,Email,Password,AvatarUrl) VALUES (?,?,?,?,?,?) ",body_data)   
    }
    deleteUser(values) {
        const body_data = [values.UserName,values.Email]
        console.log('Deleting This User !')
        return queryAsync("DELETE FROM Users WHERE UserName = ? and Email = ? ",body_data)
    }
    updateUser(values) {
        const body_data = [values.UserName,values.Filmname,values.LastName,values.Email,values.Password,values.AvatarUrl,values.Id]
        console.log("Updating was successfully")
        return queryAsync("UPDATE Users SET UserName = ?, FilmName = ?, LastName = ?, Email = ?, Password = ?, AvatarUrl = ? WHERE Id = ?",body_data)
    }
    /*getAllUserMovies(value) {
        console.log('CallGetallusermovies!')
        return queryAsync(`CALL GetUserMovies(?)`,value.PersonID)
    }
    getAllUserSeries(value) {
        console.log('CallGetallusermovies!')
        return queryAsync(`CALL GetUserSeries(?)`,value.PersonID)
    }
    addUserMovie(values) {
        const body_data = [
            values.PersonID,
            values.tmdbid,
            values.title,
            values.director,
            values.relasedate,
            values.story,
            values.acting,
            values.editing,
            values.music,
            values.datewatch,
            values.review
        ]
        console.log(body_data)
        console.log('CallAddUserMovie!')
        return queryAsync(`CALL AddUserMovie(?,?,?,?,?,?,?,?,?,?,?)`,body_data)   
    }
    addUserSeries(values) {
        const body_data = [
            values.PersonID,
            values.tmdbid,
            values.title,
            values.producer, 
            values.relasedate,
            values.story,
            values.acting,
            values.editing,
            values.music,
            values.datewatch,
            values.review
        ]
        console.log(body_data)
        console.log('CallAddUserMovie!')
        return queryAsync(`CALL AddUserSeries(?,?,?,?,?,?,?,?,?,?,?)`,body_data)   
    }*/
}

module.exports = UserTrancactions;