element = document.getElementById("money");

var moneyRemaining = 50;

updateRemainingMoneyDisplay(moneyRemaining);

function updateDisplay(text){
    element.innerHTML = text;
}

function updateRemainingMoneyDisplay(newMoney){

    if(newMoney > 0){
        var newMoneyString = newMoney + " Cent";
        updateDisplay(newMoneyString);
    }

    if(newMoney <= 0){
        returnMoney = newMoney * -1;
        var newMoneyString = "You have given enough money! Your change is: " + returnMoney + " cents";
        updateDisplay(newMoneyString);
    }
}

function updateRemainingMoney(amount){
    moneyRemaining = moneyRemaining - amount;
    updateRemainingMoneyDisplay(moneyRemaining);
}