const jwt = require("jsonwebtoken");

module.exports = (req,res,next) => {
    jwt.verify(req.headers.token, "secret", function(err, decoded) {
        if(err) {
            res.json("Yetkisiz İşlem")
        } else {
            req.decode = decoded;
            next();
        } 
    });
}