require('dotenv/config');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(require('./routers/authRouter'));

app.get('/',(req,res) =>{
    res.json("BFG Review Project");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

