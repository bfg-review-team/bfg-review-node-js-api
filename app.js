require('dotenv/config');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(require('./routers/authRouter'));
app.use(require('./routers/reviewRouter'));
app.use(require('./routers/messageRouter'));
app.use(require('./routers/discussionRouter'));

app.get('/',(req,res) =>{
    res.json("Auth Example Project2");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

