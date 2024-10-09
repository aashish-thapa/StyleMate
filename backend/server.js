const express = require('express');
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(cors());

app.listen(5000, ()=>{
    console.log("Server is now running on port 5000");
})