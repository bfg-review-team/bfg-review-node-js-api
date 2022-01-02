const MessageTrancactions = require("../database/MessageTransaction")
const MessageTransactions = new MessageTrancactions()
const router  = require("express")();
const verifyToken = require("../middleware/verifyToken");

router.get("/message", verifyToken, async (req, res) => {
    const results = await MessageTransactions.getMessage(
    req.body
    );
    res.json(results);
});
router.get("/messagesAll", verifyToken, async (req, res) => {
    const results = await MessageTransactions.getAllMessages(
    req.body
    );
    res.json(results);
});

router.post("/message", verifyToken, async (req, res) => {
    const results = await MessageTransactions.addMessage(
    req.body
    );
    res.json(results);
});

router.put("/message", verifyToken, async (req, res) => {
    const results = await MessageTransactions.updateMessage(
    req.body
    );
    res.json(results);
});


router.delete("/message", verifyToken, async (req, res) => {
    const results = await MessageTransactions.deleteMessage(
    req.body
    );
    res.json(results);
});

module.exports = router