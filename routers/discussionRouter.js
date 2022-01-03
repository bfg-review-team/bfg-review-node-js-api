const DiscussionTrancactions = require("../database/discussionTransaction")
const discussionTransactions = new DiscussionTrancactions()
const router  = require("express")();
const verifyToken = require("../middleware/verifyToken");

router.get("/discussion", verifyToken, async (req, res) => {
    const results = await discussionTransactions.getDiscussion(
    req.body
    );
    res.json(results);
});
router.get("/discussionAll", verifyToken, async (req, res) => {
    const results = await discussionTransactions.getAllDiscussions(
    req.body
    ).catch();
    res.json(results);
});

router.get("/moviediscussionAll", verifyToken, async (req, res) => {
    const results = await discussionTransactions.getMovieDiscussions(
    req.body
    );
    res.json(results);
});

router.post("/discussion", verifyToken, async (req, res) => {
    const results = await discussionTransactions.addDiscussion(
    req.body
    );
    res.json(results);
});

router.put("/discussion", verifyToken, async (req, res) => {
    const results = await discussionTransactions.updateDiscussion(
    req.body
    );
    res.json(results);
});

router.delete("/discussion", verifyToken, async (req, res) => {
    const results = await discussionTransactions.deleteDiscussion(
    req.body
    );
    res.json(results);
});

module.exports = router