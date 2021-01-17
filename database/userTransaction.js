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
    addUser(values) {
        console.log("uloo", values.Name);
        const body_data = {
            Name: values.Name,
            Surname: values.Surname,
            Email: values.Email,
            UserName : values.UserName,
            Pasword: values.Pasword
        }
        
        insertAsync('Person', body_data)
        .then(function (info) {
            console.log('New User Entered!', info);
            return true;
        })
        .catch(function (err) {
            console.log('Error creating new user, mysql error:', err.message);
            return false;
        });
        
            // `insert into Person (Name,Surname,Email,UserName,Pasword,TMDB_UserName,TMDB_Pasword) VALUES 
            // (${values.Name}, ${values.Surname}, ${values.Email},${values.UserName},${values.Pasword},${values.TMDB_UserName},${values.TMDB_Pasword} )`    
    }
    getAllUserMovies(value) {
        console.log('CallGetallusermovies!')
        return queryAsync(`CALL GetUserMovies(?)`,value.personId)
    }
}

module.exports = UserTrancactions;