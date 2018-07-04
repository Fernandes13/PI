var loadPlayers = function (){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8081/players", true);
    xhr.onreadystatechange = function () {
        if ((this.readyState === 4) && (this.status === 200)) {
            var response = JSON.parse(xhr.responseText);
            console.log(response);
            playersList = [];
            response.Player.forEach(function(current){
                playersList.push(new Player(current.player_id, current.player_name, current.player_country, current.player_gender,
                    (current.player_birth_date) ? current.player_birth_date.toString().split('T')[0] : "-"));
            });
            console.log(playersList);
        }
    };
    xhr.send();
};