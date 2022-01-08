const UserTrancactions = require("../database/userTransaction");
const AuthTrancactions = require("../database/authTransaction");
const MessageTrancactions = require("../database/messageTransaction");

const userTrancactions = new UserTrancactions();
const authTrancactions = new AuthTrancactions();
const messageTransactions = new MessageTrancactions();
const router = require("express")();
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const user = await authTrancactions
    .findOneAsync({
      Email: req.body.Email,
      Password: req.body.Password,
    })
    .catch();
  if (!user) {
    res.status(400).json("Kullanıcı adı ya da şifre ad kontrol ediniz");
    return;
  }
  var token = jwt.sign({ PersonID: user.PersonID }, "secret", {
    expiresIn: "14d",
  });
  res.json({ user, token });
});


router.post("/user", async (req, res) => {
  const users = await userTrancactions.addUser(Object.assign(req.body));
  res.json(users);
});

module.exports = router;
