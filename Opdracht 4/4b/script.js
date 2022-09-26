element = document.getElementById("money");

var moneyRemaining = 50;

updateRemainingMoney(moneyRemaining);

function updateRemainingMoney(newMoney){

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


function minusTwentyFive(){
    moneyRemaining = moneyRemaining - 25;
    updateRemainingMoney(moneyRemaining);
}

function minusTen(){
    moneyRemaining = moneyRemaining - 10;
    updateRemainingMoney(moneyRemaining);
}

function minusFive(){
    moneyRemaining = moneyRemaining - 5;
    updateRemainingMoney(moneyRemaining);
}