DROP DATABASE IF EXISTS ReboundArenaDB;
CREATE DATABASE ReboundArenaDB;
USE ReboundArenaDB;

CREATE TABLE Player(
	player_id INT UNIQUE NOT NULL,
    player_name VARCHAR(50),
    player_country VARCHAR(50),
    player_genre CHAR,
    player_birth_date DATE,
	PRIMARY KEY(player_id));
    
CREATE TABLE GameSession(
	game_id INT UNIQUE NOT NULL,
    game_date DATE,
	player1_id INT NOT NULL,
    player2_id INT NOT NULL CHECK (player2_id != player1_id),
    game_description VARCHAR(100),
    winner_id INT NOT NULL,
    PRIMARY KEY(game_id),
    FOREIGN KEY(player1_id) REFERENCES Player(player_id),
    FOREIGN KEY(player2_id) REFERENCES Player(player_id),
    FOREIGN KEY(winner_id)  REFERENCES Player(player_id));
    
    
CREATE TABLE StatisticsType(
	stats_type_id INT UNIQUE NOT NULL,
    stats_type_name VARCHAR(50),
    stats_type_description VARCHAR(150),
    PRIMARY KEY(stats_type_id));
    

CREATE TABLE Statistics(
	stats_id INT UNIQUE NOT NULL,
    stats_stats_type_id INT NOT NULL,
    stats_value INT,
    stats_player_id INT NOT NULL,
    PRIMARY KEY(stats_id),
    FOREIGN KEY(stats_player_id) REFERENCES Player(player_id),
    FOREIGN KEY(stats_stats_type_id) REFERENCES StatisticsType(stats_type_id));
        
    
    






