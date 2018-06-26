"use strict";
var express = require("express");
var requestHandlers = require("./scripts/request-handlers.js");
var bodyParser = require("body-parser");
var app = express();
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("www"));

//roteamento
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "/", "index.html"));
});

app.get("/person", requestHandlers.getPlayer);
app.get("/country", requestHandlers.getGameSessions);
app.post("/person", requestHandlers.createUpdatePlayer);
app.put("/person/:id", requestHandlers.createUpdateSession);
app.delete("/person/:id", requestHandlers.removePlayer);
app.delete("/person/:id", requestHandlers.removeSession);

app.listen(8081, function () {
    console.log("Server running at http://localhost:8081");
});