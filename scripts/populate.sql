USE ReboundArenaDB;

INSERT INTO Player(player_id,player_name,player_country,player_genre,player_birth_date) VALUES (1,'Ricardo Fernandes','Portugal','M',STR_TO_DATE('16-07-1996','%d-%m-%Y'));
INSERT INTO Player(player_id,player_name,player_country,player_genre,player_birth_date) VALUES (2,'Marcos Letras','Portugal','M',STR_TO_DATE('30-11-1997','%d-%m-%Y'));
INSERT INTO Player(player_id,player_name,player_country,player_genre,player_birth_date) VALUES (3,'John Smith','Inglaterra','M',STR_TO_DATE('21-11-1985','%d-%m-%Y'));
INSERT INTO Player(player_id,player_name,player_country,player_genre,player_birth_date) VALUES (4,'Paula Ferreira','Portugal','F',STR_TO_DATE('14-05-1998','%d-%m-%Y'));
INSERT INTO Player(player_id,player_name,player_country,player_genre,player_birth_date) VALUES (5,'Enrique Almarez','Espanha','M',STR_TO_DATE('04-03-1990','%d-%m-%Y'));
INSERT INTO Player(player_id,player_name,player_country,player_genre,player_birth_date) VALUES (6,'Ruben Tavares','Portugal','M',STR_TO_DATE('13-12-1997','%d-%m-%Y'));

INSERT INTO GameSession(game_id,game_date,player1_id,player2_id,game_description,winner_id) VALUES (1,STR_TO_DATE('16-07-2018','%d-%m-%Y'),1,2,'Jogo amigável',1);
INSERT INTO GameSession(game_id,game_date,player1_id,player2_id,game_description,winner_id) VALUES (2,STR_TO_DATE('10-06-2018','%d-%m-%Y'),3,5,'Jogo amigável',3);
INSERT INTO GameSession(game_id,game_date,player1_id,player2_id,game_description,winner_id) VALUES (3,STR_TO_DATE('01-07-2018','%d-%m-%Y'),4,6,'Jogo amigável',4);

INSERT INTO StatisticsType(stats_type_id,stats_type_name,stats_type_description) VALUES (1,'Damage Dealt','Estatística que guarda o dano que um jogador deu ao longo do jogo no jogador adversário');
INSERT INTO StatisticsType(stats_type_id,stats_type_name,stats_type_description) VALUES (2,'Damage Absorver Accuracy','Estatística que guarda o dano que um jogador conseguiu absorver com o seu escudo ao longo do jogo');
INSERT INTO StatisticsType(stats_type_id,stats_type_name,stats_type_description) VALUES (3,'Pick-Ups','Estatística que guarda o número de pickups que um jogador conseguiu apanhar ao longo do jogo');
INSERT INTO StatisticsType(stats_type_id,stats_type_name,stats_type_description) VALUES (4,'Victories','Estatística que guarda o número de vitórias que já alcançou desde que começou a jogar');

INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (1,1,1,130);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (2,2,1,20);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (3,3,1,4);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (4,4,1,1);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (5,1,1,20);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (6,2,1,30);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (7,3,1,1);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (8,4,1,0);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (9,1,1,40);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (10,2,1,20);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (11,3,1,2);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (12,4,1,0);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (13,1,1,10);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (14,2,1,80);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (15,3,1,3);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (16,4,1,0);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (17,1,1,120);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (18,2,1,10);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (19,3,1,1);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (20,4,1,1);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (21,1,1,110);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (22,2,1,30);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (23,3,1,5);
INSERT INTO Statistics(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (24,4,1,1);


