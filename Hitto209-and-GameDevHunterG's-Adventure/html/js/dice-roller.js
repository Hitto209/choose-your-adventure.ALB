let rolledNumber = 0;

function rollD20(){
    rolledNumber = Math.floor(Math.random() * 20) + 1;
    document.getElementById('dice').style.backgroundImage = 'url("/html/img/d20.png")';
    document.getElementById('result').innerHTML = rolledNumber;
}

function rollD8(){
    rolledNumber = Math.floor(Math.random() * 8) + 1; 
    document.getElementById('dice').style.backgroundImage = 'url("/html/img/d8.jpg")';
    document.getElementById('result').innerHTML = rolledNumber;
}