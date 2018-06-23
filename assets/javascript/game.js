
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var storeScore = [];
var crystalScore;
var targetScore;

var winCounter = 0;
var lossCounter = 0;
var totalScore = 0;

crystal1 = Math.floor(Math.random() * 12) + 1;
crystal2 = Math.floor(Math.random() * 12) + 1;
crystal3 = Math.floor(Math.random() * 12) + 1;
crystal4 = Math.floor(Math.random() * 12) + 1;
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);

startGame();
roundComplete();

function startGame() {
    totalScore=0;
    document.getElementById("total").innerHTML = totalScore;
    
    targetScore = Math.floor(Math.random() * 101) + 19;
    console.log(targetScore);
    
    document.getElementById("targetScore").innerHTML = targetScore;

    var crystalClick1 = document.getElementById("crystal1");
    crystalClick1.onclick = function () {
        console.log(crystal1);
        totalScore= totalScore + crystal1;
        document.getElementById("total").innerHTML=totalScore;
        roundComplete();
    }

    var crystalClick2 = document.getElementById("crystal2");
    crystalClick2.onclick = function () {
        console.log(crystal2);
        totalScore= totalScore + crystal2;
        document.getElementById("total").innerHTML=totalScore;
        roundComplete();
    }
    var crystalClick3 = document.getElementById("crystal3");
    crystalClick3.onclick = function () {
        console.log(crystal3);
        totalScore= totalScore + crystal3;
        document.getElementById("total").innerHTML=totalScore;
        roundComplete();

    }
    var crystalClick4 = document.getElementById("crystal4");
    crystalClick4.onclick = function () {
        console.log(crystal4);
        totalScore= totalScore + crystal4;
        document.getElementById("total").innerHTML=totalScore;
        roundComplete();
    }

}

function roundComplete() {

    console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter);
    console.log("In Round complete");
    console.log(targetScore);
    console.log(totalScore);
    if (targetScore === totalScore) { 
        winCounter++;
        document.getElementById("win-counter").innerHTML = "Wins: " + winCounter;
        startGame();
    }
    else if (targetScore < totalScore) { 
        lossCounter++;
        document.getElementById("loss-counter").innerHTML = "Losses: " + lossCounter;
        startGame();

    }

}