let rolledNumber = 0;

function rollD20(){
    rolledNumber = Math.floor(Math.random() * 20) + 1;
    document.getElementById('result').innerHTML = rolledNumber;
}