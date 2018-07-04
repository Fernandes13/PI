var playersList = [];

/*let player = new Player("JoséPedroBorges", "July,20,1994","Portugal","Male",null);
playersList.push(player);
let player2 = new Player("RosalinaGabriel", "December,20,1985","Portugal","Male",null);
playersList.push(player2);
let player3 = new Player("BrunoPereira", "January,20,1989","Portugal","Male",null);
playersList.push(player3);
let player4 = new Player("AnaBeja", "March,20,1984","Portugal","Female",null);
playersList.push(player4);
let player5 = new Player("DiogoAbreu", "February,20,1994","Portugal","Female",null);
playersList.push(player5);
let player6 = new Player("PaulaOliveira", "May,20,1944","Cyprus","Female",null);
playersList.push(player6);
let player7 = new Player("InêsAntunes", "May,20,1984","Portugal","Male",null);
playersList.push(player7);
let player8 = new Player("MarcosLetras", "November,20,1984","Portugal","Male",null);
playersList.push(player8);
let player9 = new Player("PedroSimões", "May,20,1984","Portugal","Male",null);
playersList.push(player9);*/

var indexSelected = [];
var activeTable = "";
var countries = ["Austria","Estonia","Cyprus","Lithuania","Israel","Czech Republic","Bulgaria","Albania","Finland","Ireland","Portugal"];
var playersInserted = [];
var statisticsList = [];
var sessonsList = [];

/*function filtro(pItem,item){
    return (pItem > item) ? -1 : (pItem < item) ? 1 : 0;
}*/


var sessao = new GameSession( "May,20,1984", "Jogatana1", player, player4, player4);
sessonsList.push(sessao);
var sessao2 = new GameSession( "May,20,1984", "Jogatana2", player2, player4, player2);
sessonsList.push(sessao2);
var sessao3 = new GameSession( "May,20,1984", "Jogatana3", player3, player5, player3);
sessonsList.push(sessao3);
var sessao4 = new GameSession( "May,20,1984", "Jogatana4", player7, player9, player7);
sessonsList.push(sessao4);
var sessao5 = new GameSession( "May,20,1984", "Jogatana5", player8, player, player);
sessonsList.push(sessao5);
var sessao6 = new GameSession( "May,20,1984", "Jogatana6", player9, player2, player9);
sessonsList.push(sessao6);
var sessao7 = new GameSession( "May,20,1984", "Jogatana7", player5, player9,player9);
sessonsList.push(sessao7);
var sessao8 = new GameSession( "May,20,1984", "Jogatana8", player8, player3,player8);
sessonsList.push(sessao8);

var tipoEstatistica  = new StatisticType("Damage Dealt","Dano dado");
var tipoEstatistica2 = new StatisticType("Damage Absorbed","Dano absorvido pelo escudo");
var tipoEstatistica3 = new StatisticType("Accuracy","Precisão dos tiros");
var tipoEstatistica4 = new StatisticType("Pick-ups","Pick-ups apanhados");
var tipoEstatistica5 = new StatisticType("Victories", "Vitórias");

var estatistica  = new Statistic(200,tipoEstatistica,sessao,julio);

var estatistica2 = new Statistic(500,tipoEstatistica2,sessao,julio);

var estatistica3 = new Statistic(50.11,tipoEstatistica3,sessao,julio);

var estatistica4 = new Statistic(5,tipoEstatistica4,sessao,julio);

var estatistica5 = new Statistic(1,tipoEstatistica5,sessao,julio);

var statsPlayer = new StatisticPlayer(julio,estatistica.value,estatistica2.value,estatistica3.value,estatistica4.value,estatistica5.value);
statisticsList.push(statsPlayer);

var estatistica6 = new Statistic(500,tipoEstatistica,sessao,julio2);

var estatistica7 = new Statistic(200,tipoEstatistica2,sessao,julio2);

var estatistica8 = new Statistic(88.11,tipoEstatistica3,sessao,julio2);

var estatistica9 = new Statistic(6,tipoEstatistica4,sessao,julio2);

var estatistica10 = new Statistic(3,tipoEstatistica5,sessao,julio2);


var statsPlayer2 = new StatisticPlayer(julio2,estatistica6.value,estatistica7.value,estatistica8.value,estatistica9.value,estatistica10.value);
statisticsList.push(statsPlayer2);

var estatistica11 = new Statistic(1000,tipoEstatistica,sessao,julio3);

var estatistica12 = new Statistic(50,tipoEstatistica2,sessao,julio3);

var estatistica13 = new Statistic(42.20,tipoEstatistica3,sessao,julio3);

var estatistica14 = new Statistic(2,tipoEstatistica4,sessao,julio3);

var estatistica15 = new Statistic(0,tipoEstatistica5,sessao,julio3);

var statsPlayer3 = new StatisticPlayer(julio3,estatistica11.value,estatistica12.value,estatistica13.value,estatistica14.value,estatistica15.value);
statisticsList.push(statsPlayer3);