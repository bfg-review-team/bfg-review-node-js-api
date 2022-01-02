const ListTrancactions = require("../database/listsTransaction")
const listsTransactions = new ListTrancactions()
const router  = require("express")();
const verifyToken = require("../middleware/verifyToken");

router.get("/list", verifyToken, async (req, res) => {
    const results = await listsTransactions.getList(
    req.body
    );
    res.json(results);
});
router.get("/listsAll", verifyToken, async (req, res) => {
    const results = await listsTransactions.getAllLists(
    req.body
    );
    res.json(results);
});

router.get("/movieListsAll", verifyToken, async (req, res) => {
    const results = await listsTransactions.getMovieLists(
    req.body
    );
    res.json(results);
});

router.post("/list", verifyToken, async (req, res) => {
    const results = await listsTransactions.addList(
    req.body
    );
    res.json(results);
});

router.put("/list", verifyToken, async (req, res) => {
    const results = await listsTransactions.updateList(
    req.body
    );
    res.json(results);
});

router.delete("/list", verifyToken, async (req, res) => {
    const results = await listsTransactions.deleteList(
    req.body
    );
    res.json(results);
});

module.exports = router