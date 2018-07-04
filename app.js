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

app.get("/players", requestHandlers.getPlayers);
/*app.post("/player", requestHandlers.createUpdatePlayer);
app.put("/player/:id", requestHandlers.createUpdatePlayer);
app.delete("/player/:id", requestHandlers.removePlayer);
app.get("/gameSessions", requestHandlers.getGameSessions);
app.post("/gameSession", requestHandlers.createUpdateSession);
app.put("/gameSession/:id", requestHandlers.createUpdateSession);
app.delete("/gameSession/:id", requestHandlers.removeSession);*/

app.listen(8081, function () {
    console.log("Server running at http://localhost:8081");
});