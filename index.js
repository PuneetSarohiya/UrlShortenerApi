const express= require("express");

const connectDB = require("./config/db")

const app= express();

//Connect to database
connectDB();

app.use(express.json({ extented: false}));

//Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url',require('./routes/url'))

const PORT = 9000;

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);
})