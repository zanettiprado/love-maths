// Wait to the DOM to finish before loading before running the game
//Get the button elements and add event listners to them 

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if  (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!"); 
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

function runGame() {
    let num1 = Math.floor(Math.random() *25) +1;
    let num2 = Math.floor(Math.random() *25) +1;

}

function checkAnswer () {

}

function calculateCorrectAnwser() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion () {

}

function displaySubtractQuestion () {

}

function displayMultiplayQuestions () {

}