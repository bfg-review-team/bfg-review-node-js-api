const { FadabHelper , queryAsync, insertAsync } = require("fadab-mysql-helper");

class UserTrancactions extends FadabHelper{
    constructor() {
        super();
        this.baseTable = "Person";
    }
    getAllUser() {
        console.log('CallGetallusers!')
        return queryAsync("CALL GetAllUsers()")
    }
    getUser(values) {
        const body_data = [values.UserName,values.Pasword]
        console.log('Call Getuser!')
        return queryAsync("Select * from vwUser Where UserName= ? And Pasword = ? ",body_data)
    }
    addUser(values) {
        const body_data = [values.Name,values.Surname,values.Email,values.UserName,values.Pasword]
        console.log('CallAddNewUser!')
        return queryAsync(`CALL AddNewUser(?,?,?,?,?)`,body_data)   
    }
    deleteUser(values) {
        const body_data = [values.UserName,values.Email]
        console.log('Deleting This User !')
        return queryAsync(`CALL DeleteUser (?,?)`,body_data)
    }
    updateUser(values) {
        const body_data = [values.personId,values.Email]
        console.log("Updating was successfully")
        return queryAsync(`CALL UpdateUser (?,?)`,body_data)
    }
    getAllUserMovies(value) {
        console.log('CallGetallusermovies!')
        return queryAsync(`CALL GetUserMovies(?)`,value.personId)
    }
    addUserMovie(values) {
        const body_data = [
            values.personId,
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
}

module.exports = UserTrancactions;