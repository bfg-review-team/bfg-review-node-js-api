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
<<<<<<< HEAD
    res.json("Auth Example Project2");
=======
    res.json("BFG Review Project");
>>>>>>> 2d4ff216e1d5e171b6cf47d30cd1118475fbc717
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

