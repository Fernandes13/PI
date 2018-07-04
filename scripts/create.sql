DROP DATABASE IF EXISTS PookieDB;
CREATE DATABASE PookieDB;
USE PookieDB;

CREATE TABLE Player(
	player_id INT UNIQUE NOT NULL,
    player_name VARCHAR(50),
    player_country VARCHAR(50),
    player_gender CHAR,
    player_birth_date DATE,
	PRIMARY KEY(player_id));
    
CREATE TABLE GameSession(
	game_id INT UNIQUE NOT NULL,
    game_date DATE,
	player_id INT NOT NULL,
    game_description VARCHAR(100),
    PRIMARY KEY(game_id),
    FOREIGN KEY(player_id) REFERENCES Player(player_id));
    
    
CREATE TABLE StatisticsType(
	stats_type_id INT UNIQUE NOT NULL,
    stats_type_name VARCHAR(50),
    stats_type_description VARCHAR(150),
    PRIMARY KEY(stats_type_id));
    

CREATE TABLE Stats(
	stats_id INT UNIQUE NOT NULL,
    stats_stats_type_id INT NOT NULL,
    stats_value INT,
    stats_player_id INT NOT NULL,
    PRIMARY KEY(stats_id),
    FOREIGN KEY(stats_player_id) REFERENCES Player(player_id),
    FOREIGN KEY(stats_stats_type_id) REFERENCES StatisticsType(stats_type_id));
        
    
    






