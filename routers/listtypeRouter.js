const ListTypeTrancactions = require("../database/listtypeTransaction")
const listtypeTransactions = new ListTypeTrancactions()
const router  = require("express")();
const verifyToken = require("../middleware/verifyToken");

router.get("/listtype", verifyToken, async (req, res) => {
    const results = await listtypeTransactions.getListType(
    req.body
    );
    res.json(results);
});
router.get("/listtypeAll", verifyToken, async (req, res) => {
    const results = await listtypeTransactions.getAllListTypes(
    req.body
    );
    res.json(results);
});

router.post("/listtype", verifyToken, async (req, res) => {
    const results = await listtypeTransactions.addListType(
    req.body
    );
    res.json(results);
});

router.put("/listtype", verifyToken, async (req, res) => {
    const results = await listtypeTransactions.updateListType(
    req.body
    );
    res.json(results);
});

router.delete("/listtype", verifyToken, async (req, res) => {
    const results = await listtypeTransactions.deleteListType(
    req.body
    );
    res.json(results);
});

module.exports = router