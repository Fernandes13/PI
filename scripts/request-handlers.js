"use strict";
const mysql = require("mysql");
const options = require("./connectionOptions.json");

/**
 * Função para retornar a lista de pessoas da BD.
 * @param {*} req 
 * @param {*} res 
 */
function getPlayer(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT id, name, birthDate, idCountry, gender FROM Player";
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({ "Erro": true, "Message": "Error MySQL query to Player table" });
        } else {
            res.json({ "Ok": false, "Message": "Success", "Player": rows });
        }
    });
}


/**
 * Função para retornar a lista de pessoas da BD.
 * @param {*} req 
 * @param {*} res 
 */
function getGameSessions(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT id, startDate, description, idPlayer1, idPlayer2, idWinner FROM GameSession";
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({ "Erro": true, "Message": "Error MySQL query to GameSession table" });
        } else {
            res.json({ "Ok": false, "Message": "Success", "GameSession": rows });
        }
    });
}


/**
 * Função que permite criar ou editar uma pessoa, consoante o pedido enviado pelo cliente.
 * 
 * @param {Object} request pedido do cliente
 * @param {Object} response resposta do servidor
 */
function createUpdatePlayer(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var name = req.body.name;
    var birthDate = (req.body.birthDate) ? req.body.birthDate : null;
    var idCountry = (req.body.idCountry) ? req.body.idCountry : null;
    var gender = (req.body.gender) ? req.body.gender : null;
    var sql;
    if (req.method === "PUT") {
        sql = mysql.format("UPDATE Player SET name=?, birthdate=?, idCountry=?, gender=? WHERE id=?", [name, birthDate, idCountry, gender, req.params.id]);
    } else {
        if (req.method === "POST") {
            sql = mysql.format("INSERT INTO Player (name, birthdate, idCountry, gender) VALUES (?,?,?,?)", [name, birthDate, idCountry, gender]);
        }
    }
    connection.query(sql,function (err, rows, fields) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(404);
                    } else {
                        res.send(rows);
                    }
        });
    connection.end();
}

/**
 * Função que permite remover uma pessoa
 * 
 * @param {Object} request pedido do cliente
 * @param {Object} response resposta do servidor
 */
function removePlayer(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var sql = mysql.format("DELETE FROM Player WHERE id = ?", [req.params.id]);
    connection.query(sql,
        function (err, rows, fields) {
            if (err) {
                res.sendStatus(404);
            } else {
                res.send();
            }
        });
    connection.end();
}

/**
 * Função que permite criar ou editar uma pessoa, consoante o pedido enviado pelo cliente.
 * 
 * @param {Object} request pedido do cliente
 * @param {Object} response resposta do servidor
 */
function createUpdateSession(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var description = req.body.description;
    var startDate = (req.body.startDate) ? req.body.startDate : null;
    var idPlayer1 = (req.body.idPlayer1) ? req.body.idPlayer1 : null;
    var idPlayer2 = (req.body.idPlayer2) ? req.body.idPlayer2 : null;
    var idWinner = (req.body.idWinner) ? req.body.idWinner : null;
    var sql;
    if (req.method === "PUT") {
        sql = mysql.format("UPDATE Player SET name=?, birthdate=?, idCountry=?, gender=? WHERE id=?", [name, birthDate, idCountry, gender, req.params.id]);
    } else {
        if (req.method === "POST") {
            sql = mysql.format("INSERT INTO Player (name, birthdate, idCountry, gender) VALUES (?,?,?,?)", [name, birthDate, idCountry, gender]);
        }
    }
    connection.query(sql,function (err, rows, fields) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(404);
                    } else {
                        res.send(rows);
                    }
        });
    connection.end();
}

/**
 * Função que permite remover uma pessoa
 * 
 * @param {Object} request pedido do cliente
 * @param {Object} response resposta do servidor
 */
function removeSession(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var sql = mysql.format("DELETE FROM GameSession WHERE id = ?", [req.params.id]);
    connection.query(sql,
        function (err, rows, fields) {
            if (err) {
                res.sendStatus(404);
            } else {
                res.send();
            }
        });
    connection.end();
}


module.exports.getPlayer = getPlayer;
module.exports.getGameSessions = getGameSessions;
module.exports.createUpdatePlayer = createUpdatePlayer;
module.exports.removePlayer = removePlayer;
module.exports.createUpdateSession = createUpdateSession;
module.exports.removeSession = removeSession;