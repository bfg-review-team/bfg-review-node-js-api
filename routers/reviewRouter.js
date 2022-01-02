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
router.get("/reviewAll", verifyToken, async (req, res) => {
    const users = await reviewTransactions.getAllReviews(
    req.body
    );
    res.json(users);
});

router.post("/review", verifyToken, async (req, res) => {
    const users = await reviewTransactions.addReview(
    req.body
    );
    res.json(users);
});

router.put("/review", verifyToken, async (req, res) => {
    const users = await reviewTransactions.updateReview(
    req.body
    );
    res.json(users);
});

router.put("/review/like", verifyToken, async (req, res) => {
    const users = await reviewTransactions.updateReviewLike(
    req.body
    );
    res.json(users);
});

router.put("/review/dislike", verifyToken, async (req, res) => {
    const users = await reviewTransactions.updateReviewDislike(
    req.body
    );
    res.json(users);
});

router.delete("/review", verifyToken, async (req, res) => {
    const users = await reviewTransactions.deleteReview(
    req.body
    );
    res.json(users);
});

module.exports = router