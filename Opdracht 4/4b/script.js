element = document.getElementById("money");

var moneyRemaining = 50;

updateRemainingMoneyDisplay(moneyRemaining);

function updateRemainingMoneyDisplay(newMoney){

    console.log(newMoney);

    var newMoneyString = newMoney + " Cent";
    element.innerHTML = newMoneyString;

    if(newMoney === 0){
        alert("You have given enough money!")
    }

    if(newMoney < 0) {
        alert("You have returned too much money");
    }
}

function updateRemainingMoney(amount){
    moneyRemaining = moneyRemaining - amount;
    updateRemainingMoneyDisplay(moneyRemaining);
}