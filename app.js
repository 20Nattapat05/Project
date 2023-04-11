const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app')
const app = express();
const port = 3000;

app.get("/", (req,res) =>{
    res.send("Hi");
})

app.listen(port, ()=>{
    debug("Listening on port" + chalk.red(" : "+port));
})