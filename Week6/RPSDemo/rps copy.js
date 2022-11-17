//canvas drawing stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

//drawing the fonts
ctx.font = "40px Ariel";
ctx.fillStyle = "blue";
ctx.strokeStyle = "yellow";
ctx.fillText("Welcome to the RPS Game!", 125,280);
ctx.strokeText("Welcome to the RPS Game!", 125,280);

alert("Select rock, paper, or scissors!");
var rps = ["rock","paper","scissors"];
console.log(rps[0]);

document.getElementById("rock").addEventListener('click',function(e){alert("You picked " + rps[0]);
    playGame(rps[0]);
});
document.getElementById("paper").addEventListener('click',function(e){alert("You picked paper!");
    playGame(rps[1]);
});
document.getElementById("scissors").addEventListener('click',function(e){alert("You picked scissors!");
    playGame(rps[2]);
});

function playGame(playerchoice){
    var cpuChoice =Math.floor(Math.random() * 2.99);
    console.log(cpuChoice, playerchoice);

    switch(playerchoice){
        case "rock":
            if(cpuChoice == 0)[
                //rock
                alert("cpu chose rock. It's a tie!")
            ]
            else if(cpuChoice == 1){
                //paper
                alert("cpu chose Paper. You lose!")
            }
            else{
                alert("cpu chose Scissors. You win!")
            }
            
        break;

        case "paper":
            if(cpuChoice == 0)[
                //rock
                alert("cpu chose rock. It's a win!")
            ]
            else if(cpuChoice == 1){
                //paper
                alert("cpu chose Paper. You tie!")
            }
            else{
                alert("cpu chose Scissors. You lose!")
            }
            
        break;

        case "scissors":
            if(cpuChoice == 0)[
                //rock
                alert("cpu chose rock. It's a lose!")
            ]
            else if(cpuChoice == 1){
                //paper
                alert("cpu chose Paper. You win!")
            }
            else{
                alert("cpu chose Scissors. It's a tie!")
            }
            
        break;

    }
    
}