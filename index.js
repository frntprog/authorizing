const express = require("express");
const mongoose = require("mongoose");
const authRouter = require('./routes/authRouter');

const PORT = process.env.PORT || 3000;
require('dotenv/config');

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
    try {
        mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true});
        app.listen(PORT, () => console.log(`Started... On port ${PORT}`));
    }catch(e){
        console.log(e);
    }
}

start();