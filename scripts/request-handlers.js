"use strict";
const mysql = require("mysql");
const options = require("./connectionOptions.json");

/**
 * Função para retornar a lista de players da BD.
 * @param {*} req 
 * @param {*} res 
 */
function getPlayer(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT player_id, player_name, player_birthDate, player_country, player_gender FROM Player";
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({ "Erro": true, "Message": "Error MySQL query to Player table" });
        } else {
            res.json({ "Ok": false, "Message": "Success", "Player": rows });
        }
    });
}

/**
 * Função que permite criar ou editar um player, consoante o pedido enviado pelo cliente.
 * 
 * @param {Object} request pedido do cliente
 * @param {Object} response resposta do servidor
 */
function createUpdatePlayer(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var name = req.body.name;
    var birthDate = (req.body.birthDate) ? req.body.birthDate : null;
    var country = (req.body.country) ? req.body.country : null;
    var gender = (req.body.gender) ? req.body.gender : null;
    var sql;
    if (req.method === "PUT") {
        sql = mysql.format("UPDATE Player SET player_name=?, player_birthdate=?, player_country=?, player_gender=? WHERE player_id=?", [name, birthDate, idCountry, gender, req.params.id]);
    } else {
        if (req.method === "POST") {
            sql = mysql.format("INSERT INTO Player (player_name, player_birthdate, player_country, player_gender) VALUES (?,?,?,?)", [name, birthDate, idCountry, gender]);
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
 * Função que permite remover uma player
 * 
 * @param {Object} request pedido do cliente
 * @param {Object} response resposta do servidor
 */
function removePlayer(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var sql = mysql.format("DELETE FROM Player WHERE player_id = ?", [req.params.id]);
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
 * Função para retornar a lista de sessões da BD.
 * @param {*} req 
 * @param {*} res 
 */
function getGameSessions(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT game_id, game_date, game_description, player1_id, player2_id, winner_id FROM GameSession";
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({ "Erro": true, "Message": "Error MySQL query to GameSession table" });
        } else {
            res.json({ "Ok": false, "Message": "Success", "GameSession": rows });
        }
    });
}

/**
 * Função que permite criar ou editar uma sessão, consoante o pedido enviado pelo cliente.
 * 
 * @param {Object} request pedido do cliente
 * @param {Object} response resposta do servidor
 */
function createUpdateSession(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var description = req.body.description;
    var date = (req.body.date) ? req.body.date : null;
    var idPlayer1 = (req.body.idPlayer1) ? req.body.idPlayer1 : null;
    var idPlayer2 = (req.body.idPlayer2) ? req.body.idPlayer2 : null;
    var idWinner = (req.body.idWinner) ? req.body.idWinner : null;
    var sql;
    if (req.method === "PUT") {
        sql = mysql.format("UPDATE GameSession SET game_date = ?, game_description = ?, player1_id = ?, player2_id = ?, winner_id = ? WHERE game_id=?", [date,description,idPlayer1,idPlayer2, idWinner, req.params.id]);
    } else {
        if (req.method === "POST") {
            sql = mysql.format("INSERT INTO GameSession (game_date, game_description, player1_id, player2_id, winner_id) VALUES (?,?,?,?)", [date, description, idPlayer1, idPlayer2, idWinner]);
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
 * Função que permite remover uma sessão
 * 
 * @param {Object} request pedido do cliente
 * @param {Object} response resposta do servidor
 */
function removeSession(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var sql = mysql.format("DELETE FROM GameSession WHERE game_id = ?", [req.params.id]);
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