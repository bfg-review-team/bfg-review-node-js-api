const { FadabHelper , queryAsync, insertAsync } = require("fadab-mysql-helper");

class UserTrancactions extends FadabHelper{
    constructor() {
        super();
        this.baseTable = "Users";
    }
    getAllUser() {
        console.log('CallGetallusers!')
        return queryAsync("SELECT * FROM Users")
    }
    getUser(values) {
        const body_data = [values.Id]
        console.log('Call Getuser!')
        return queryAsync("SELECT * FROM Users WHERE Id = ? ",body_data)
    }
    addUser(values) {
        const body_data = [
            values.UserName,
            values.Filmname,
            values.LastName,
            values.Email,
            values.Password,
            values.AvatarUrl
        ]
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
}

module.exports = UserTrancactions;