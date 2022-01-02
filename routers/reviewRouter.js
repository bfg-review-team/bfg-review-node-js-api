const ReviewTrancactions = require("../database/reviewTransaction")
const reviewTransactions = new ReviewTrancactions()
const router  = require("express")();
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/verifyToken");

router.get("/review", verifyToken, async (req, res) => {
    const users = await reviewTransactions.getReview(
    req.body
    );
    res.json(users);
});

module.exports = router