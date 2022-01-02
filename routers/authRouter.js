const UserTrancactions = require("../database/userTransaction");
const ReviewTrancactions = require("../database/reviewTransaction")
const MessageTrancactions = require("../database/messageTransaction")
const DiscussionTrancactions = require("../database/discussionTransaction")
const ListTrancactions = require("../database/listsTransaction")
const listsTransactions = new ListTrancactions()
const discussionTransactions = new DiscussionTrancactions()
const userTrancactions = new UserTrancactions();
const reviewTransactions = new ReviewTrancactions()
const messageTransactions = new MessageTrancactions()
const router = require("express")();
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/verifyToken");

router.post("/login", async (req, res) => {
    const user = await userTrancactions.findOneAsync({
    Email: req.body.Email,
    Password: req.body.Pasword,
});
    if (!user) {
    res.status(400).json("Kulşlanici adi ya da şifre ad kontrol ediniz");
    return;
    }
    var token = jwt.sign({ PersonID: user.PersonID }, "secret", {
    expiresIn: "14d",
    });
    res.json({ user, token });
});

router.get("/user", verifyToken, async (req, res) => {
    const users = await userTrancactions.getUser(
    req.body
    );
    res.json(users);
});
router.get("/userAll", verifyToken, async (req, res) => {
    const users = await userTrancactions.getAllUser(
    req.body
    );
    res.json(users);
});

router.post("/user", verifyToken, async (req, res) => {
    const users = await userTrancactions.addUser(
    Object.assign(req.body)    
    );
    res.json(users);
});

router.delete("/user", verifyToken, async (req, res) => {
    const users = await userTrancactions.deleteUser(
    Object.assign(req.body)    
    );
    res.json(users);
});

router.put("/user", verifyToken, async (req, res) => {
    const users = await userTrancactions.updateUser(
    Object.assign(req.body)    
    );
    res.json(users);
});

router.get("/user/reviews", verifyToken, async (req, res) => {
    const results = await reviewTransactions.getUserReviews(
        Object.assign(req.body)
    );
    res.json(results);
});
router.get("/user/messages", verifyToken, async (req, res) => {
    const results = await messageTransactions.getUserMessages(
        Object.assign(req.body)
    );
    res.json(results);
});
router.get("/user/discussions", verifyToken, async (req, res) => {
    const results = await discussionTransactions.getUserDiscussions(
        Object.assign(req.body)
    );
    res.json(results);
});
router.get("/user/lists", verifyToken, async (req, res) => {
    const results = await listsTransactions.getUserLists(
        Object.assign(req.body)
    );
    res.json(results);
});

module.exports = router;
