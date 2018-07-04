USE PookieDB;

INSERT INTO Player(player_id,player_name,player_country,player_gender,player_birth_date) VALUES (1,'Ricardo Fernandes','Portugal','M',STR_TO_DATE('16-07-1996','%d-%m-%Y'));
INSERT INTO Player(player_id,player_name,player_country,player_gender,player_birth_date) VALUES (2,'Marcos Letras','Portugal','M',STR_TO_DATE('30-11-1997','%d-%m-%Y'));
INSERT INTO Player(player_id,player_name,player_country,player_gender,player_birth_date) VALUES (3,'John Smith','Inglaterra','M',STR_TO_DATE('21-11-1985','%d-%m-%Y'));
INSERT INTO Player(player_id,player_name,player_country,player_gender,player_birth_date) VALUES (4,'Paula Ferreira','Portugal','F',STR_TO_DATE('14-05-1998','%d-%m-%Y'));
INSERT INTO Player(player_id,player_name,player_country,player_gender,player_birth_date) VALUES (5,'Enrique Almarez','Espanha','M',STR_TO_DATE('04-03-1990','%d-%m-%Y'));
INSERT INTO Player(player_id,player_name,player_country,player_gender,player_birth_date) VALUES (6,'Ruben Tavares','Portugal','M',STR_TO_DATE('13-12-1997','%d-%m-%Y'));

INSERT INTO GameSession(game_id,game_date,player_id,game_description) VALUES (1,STR_TO_DATE('16-07-2018','%d-%m-%Y'),1,'Jogo amigável');
INSERT INTO GameSession(game_id,game_date,player_id,game_description) VALUES (2,STR_TO_DATE('16-07-2018','%d-%m-%Y'),2,'Jogo amigável');
INSERT INTO GameSession(game_id,game_date,player_id,game_description) VALUES (3,STR_TO_DATE('16-07-2018','%d-%m-%Y'),3,'Jogo amigável');
INSERT INTO GameSession(game_id,game_date,player_id,game_description) VALUES (4,STR_TO_DATE('16-07-2018','%d-%m-%Y'),4,'Jogo amigável');
INSERT INTO GameSession(game_id,game_date,player_id,game_description) VALUES (5,STR_TO_DATE('16-07-2018','%d-%m-%Y'),5,'Jogo amigável');
INSERT INTO GameSession(game_id,game_date,player_id,game_description) VALUES (6,STR_TO_DATE('16-07-2018','%d-%m-%Y'),6,'Jogo amigável');

INSERT INTO StatisticsType(stats_type_id,stats_type_name,stats_type_description) VALUES (1,'Cash Earned','Dinheiro total que o jogador conseguiu apanhar');
INSERT INTO StatisticsType(stats_type_id,stats_type_name,stats_type_description) VALUES (2,'Rats Killed','Total de ratos mortos durante uma game session');
INSERT INTO StatisticsType(stats_type_id,stats_type_name,stats_type_description) VALUES (3,'Lives Lost','Total de vidas que o jogador perdeu durante uma game session');

INSERT INTO Stats(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (1,1,1,850);
INSERT INTO Stats(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (2,1,2,400);
INSERT INTO Stats(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (3,1,3,100);
INSERT INTO Stats(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (4,1,4,1100);
INSERT INTO Stats(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (5,1,5,650);
INSERT INTO Stats(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (6,1,6,250);

INSERT INTO Stats(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (7,2,1,12);
INSERT INTO Stats(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (8,2,2,10);
INSERT INTO Stats(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (9,2,3,3);
INSERT INTO Stats(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (10,2,4,8);
INSERT INTO Stats(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (11,2,5,9);
INSERT INTO Stats(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (12,2,6,11);

INSERT INTO Stats(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (13,3,2,2);
INSERT INTO Stats(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (14,3,2,1);
INSERT INTO Stats(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (15,3,3,1);
INSERT INTO Stats(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (16,3,4,2);
INSERT INTO Stats(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (17,3,5,2);
INSERT INTO Stats(stats_id,stats_stats_type_id,stats_player_id,stats_value) VALUES (18,3,6,1);


