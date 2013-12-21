//declare variables to be strict
var userChoice = "User's Choice...";
var compChoice = "Computer's Choice...";
var userScore = 0;
var compScore = 0;

//big function to find out winner
//if user answer is not one of options
var compare = function(choice1, choice2) {
    if (choice1 != "rock" && choice1 != "paper" && choice1 != "scissors") {
        document.getElementById("result").innerHTML = "What was that again?";
    }

    //if answers are the same
    else if (choice1 === choice2) {
        document.getElementById("result").innerHTML = "It's a tie!";
    }

    //various possible combos
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            document.getElementById("result").innerHTML = "Rock Wins";
            userScore++;
        }
        else {
            document.getElementById("result").innerHTML = "Paper Wins";
            compScore++;
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            document.getElementById("result").innerHTML = "Paper Wins";
            userScore++;
        }
        else {
            document.getElementById("result").innerHTML = "Scissors Wins";
            compScore++;
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            document.getElementById("result").innerHTML = "Rock Wins";
            compScore++;
        }
        else {
            document.getElementById("result").innerHTML = "Scissors Wins";
            userScore++;
        }
    }

    //catch all for debugging
    else {
        document.getElementById("result").innerHTML = "Something went horribly awry.";
    }
};

//big wrapper for game
var play = function() {

    //randomize computer choice
    var compChoice = Math.random();
    if (compChoice < 0.3333) {
        compChoice = "rock";
    }
    else if (compChoice <= 0.6666) {
        compChoice = "paper";
    }
    else {
        compChoice = "scissors";
    }

    //run the comparison function
    compare(userChoice, compChoice);

    //print choices to screen
    document.getElementById("userChoice").innerHTML = "You chose " + userChoice + ".";
    document.getElementById("compChoice").innerHTML = "The computer chose " + compChoice + ".";
    document.getElementById("userScore").innerHTML = "You've won " + userScore + " times.";
    document.getElementById("compScore").innerHTML = "The computer has won " + compScore + " times.";
};

//select choice and run when image is clicked
//object.onclick=function(){SomeJavaScriptCode};

document.getElementById("rock").onclick = function() {
    userChoice = "rock";
    play();
};
document.getElementById("paper").onclick = function() {
    userChoice = "paper";
    play();
};
document.getElementById("scissors").onclick = function() {
    userChoice = "scissors";
    play();
};