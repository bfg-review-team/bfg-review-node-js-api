const UserTrancactions = require("../database/userTransaction");
const ReviewTrancactions = require("../database/reviewTransaction");
const MessageTrancactions = require("../database/messageTransaction");
const DiscussionTrancactions = require("../database/discussionTransaction");
const ListTrancactions = require("../database/listsTransaction");
const listsTransactions = new ListTrancactions();
const discussionTransactions = new DiscussionTrancactions();
const userTrancactions = new UserTrancactions();
const reviewTransactions = new ReviewTrancactions();
const messageTransactions = new MessageTrancactions();
const router = require("express")();
const verifyToken = require("../middleware/verifyToken");


router.get("/userAll", verifyToken, async (req, res) => {
  const users = await userTrancactions.getAllUser(req.body);
  res.json(users);
});

router.delete("/user/:Id", verifyToken, async (req, res) => {
  const users = await userTrancactions.deleteUser(req.params.Id);
  res.json(users);
});

router.put("/user", verifyToken, async (req, res) => {
  const users = await userTrancactions.updateUser(Object.assign(req.body));
  res.json(users);
});





router.get("/user/:Id", verifyToken, async (req, res) => {
  const users = await userTrancactions.getUser(req.params.Id);
  res.json(users);
});

router.get("/verifyUserName/:UserName", async (req, res) => {
  const userName = await userTrancactions.getUserName(req.params.UserName);
  if(Object.keys(userName).length!==0)
  res.send({"isExist":true})
  else
  res.send({"isExist":false})
});
router.get("/verifyEmail/:Email", async (req, res) => {
  const email = await userTrancactions.getEmail(req.params.Email);
  if(Object.keys(email).length!==0){
    res.send({"isExist":true})   
  }
  else
  res.send({"isExist":false})

  
});
module.exports = router;
