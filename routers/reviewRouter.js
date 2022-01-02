const ReviewTrancactions = require("../database/reviewTransaction")
const reviewTransactions = new ReviewTrancactions()
const router  = require("express")();
const verifyToken = require("../middleware/verifyToken");

router.get("/review", verifyToken, async (req, res) => {
    const results = await reviewTransactions.getReview(
    req.body
    );
    res.json(results);
});
router.get("/reviewAll", verifyToken, async (req, res) => {
    const results = await reviewTransactions.getAllReviews(
    req.body
    );
    res.json(results);
});

router.post("/review", verifyToken, async (req, res) => {
    const results = await reviewTransactions.addReview(
    req.body
    );
    res.json(results);
});

router.put("/review", verifyToken, async (req, res) => {
    const results = await reviewTransactions.updateReview(
    req.body
    );
    res.json(results);
});

router.put("/review/like", verifyToken, async (req, res) => {
    const results = await reviewTransactions.updateReviewLike(
    req.body
    );
    res.json(results);
});

router.put("/review/dislike", verifyToken, async (req, res) => {
    const results = await reviewTransactions.updateReviewDislike(
    req.body
    );
    res.json(results);
});

router.delete("/review", verifyToken, async (req, res) => {
    const results = await reviewTransactions.deleteReview(
    req.body
    );
    res.json(results);
});

module.exports = router