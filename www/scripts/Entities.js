function Player (name,birthDate,country, gender, statistics){
    this.name = name;
    this.birthDate = new Date(birthDate);
    this.country = country;
    this.gender = gender;
    Object.defineProperty(this,"statistic",{enumerable:false, writable:true, value:statistics || []});
}

Player.prototype.toString = function(){
    return this.name;
}


function GameSession(startDate,description,player1,player2, winner){
    this.startDate = new Date(startDate); //obrigatório
    this.description = description;
    this.player1 = player1; //obrigatório
    this.player2 = player2 //obrigatório
    this.winner = winner || null;
}

function StatisticType(name,description){
    this.name = name;
    this.description = description;
}

StatisticType.prototype.toString = function(){
    return this.name;
}

function Statistic(value,statisticType,player){
    this.player = player;
    this.value = value;
    this.statisticType = statisticType;  
}

function StatisticPlayer(player,damageDealt,damageAbsorbed,accuracy,pickups,victories){
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




