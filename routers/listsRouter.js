const ListTrancactions = require("../database/listsTransaction");
const listsTransactions = new ListTrancactions();
const router = require("express")();
const verifyToken = require("../middleware/verifyToken");

router.get("/list/:Id", verifyToken, async (req, res) => {
  const results = await listsTransactions.getList(req.params.Id);
  res.json(results);
});
router.get("/listsAll/:Id", verifyToken, async (req, res) => {
  const results = await listsTransactions.getAllLists(req.params.Id);
  res.json(results);
});

router.get("/movieListsAll", verifyToken, async (req, res) => {
  const results = await listsTransactions.getMovieLists(req.body);
  res.json(results);
});

router.post("/list", verifyToken, async (req, res) => {
  const results = await listsTransactions.addList(req.body);
  res.json(results);
});

router.put("/list", verifyToken, async (req, res) => {
  const results = await listsTransactions.updateList(req.body);
  res.json(results);
});

router.delete("/list/:Id", verifyToken, async (req, res) => {
  const results = await listsTransactions.deleteList(req.params.Id);
  res.json(results);
});

module.exports = router;
