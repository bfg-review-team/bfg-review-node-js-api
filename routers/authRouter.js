const UserTrancactions = require("../database/userTransaction");
const userTrancactions = new UserTrancactions();
const router = require("express")();
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/verifyToken");
const { query } = require("express");
const { queryAsync } = require("fadab-mysql-helper");

router.post("/login", async (req, res) => {
    const user = await userTrancactions.findOneAsync({
    Email: req.body.Email,
    Pasword: req.body.Pasword,
});

  //delete user["Pasword"]
  //Yorumsatirideneme

    if (!user) {
    res.status(400).json("Kulşlanıcı adı ya da şifre adı kontrol ediniz");
    return;
    }
    var token = jwt.sign({ PersonID: user.PersonID }, "secret", {
    expiresIn: "7d",
    });
    res.json({ user, token });
});

router.get("/user", verifyToken, async (req, res) => {
    const users = await userTrancactions.getAllUser();
    res.json(users);
});

router.post("/user", verifyToken, async (req, res) => {
    const users = await userTrancactions.addUser(
    Object.assign(req.body)    
    );
    res.json(users);
});

router.get("/user/movies", verifyToken, async (req, res) => {
    const users = await userTrancactions.getAllUser();
    res.json(users);
});

module.exports = router;
