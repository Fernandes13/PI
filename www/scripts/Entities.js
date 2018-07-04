function Player (id,name,country, gender,birthDate){
    this.id = id;
    this.name = name;
    this.country = country;
    this.gender = gender;
    this.birthDate = new Date(birthDate);
}

Player.prototype.toString = function(){
    return this.name;
}


function GameSession(id,startDate,description,player1,player2, winner){
    this.id = id;
    this.startDate = new Date(startDate); //obrigatório
    this.description = description;
    this.player1 = player1; //obrigatório
    this.player2 = player2 //obrigatório
    this.winner = winner || null;
}

function StatisticType(id,name,description){
    this.id = id;
    this.name = name;
    this.description = description;
}

StatisticType.prototype.toString = function(){
    return this.name;
}

function Statistic(id,value,statisticType,player){
    this.id = id;
    this.player = player;
    this.value = value;
    this.statisticType = statisticType;  
}

function StatisticPlayer(id,player,damageDealt,damageAbsorbed,accuracy,pickups,victories){
    this.id = id;
    this.player = player;
    this.damageDealt = damageDealt;
    this.damageAbsorbed = damageAbsorbed; 
    this.accuracy = accuracy;
    this.pickups = pickups;
    this.victories = victories;
}

function getAge(date){
    var currentDate = new Date();

    return currentDate.getFullYear() - date.getFullYear();
}

function formatDate(date){
    var newDate = new Date(date);
  
    if((newDate.getMonth() + 1) < 10){
      return newDate.getDate() + "/0" + (newDate.getMonth() + 1) + "/" + newDate.getFullYear();
    }
  
    return newDate.getDate() + "/" + (newDate.getMonth() + 1) + "/" + newDate.getFullYear();
}




