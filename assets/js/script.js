// Wait to the DOM to finish before loading before running the game
//Get the button elements and add event listners to them 

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType)
            }
        });
    }

    runGame("addition");
})
/**
 * The main game "loop", called when the script is first loaded
 * and afterthe user answer has been processed
 */
function runGame(gameType) {
    // creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknow game type: ${gameType}`);
        throw `Unknow game type: ${gameType}. Aborting!`;
    }

}
/**
 * check the answer against the first element in 
 * the return calculateCorrectAnswer array
 */
function checkAnswer() {
   
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnwser();
    let isCorrect = userAnswer === calculatedAnswer[0]; 

    if (isCorrect) {
        alert("Hey! You got it right! :D");
    } else {
        alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    }
    
    runGame(calculatedAnswer[1])
}
/**
 * Get the operands (the numbers) and the operators (plus, minus etc)
 * directly from the DOM and returns the correct answers. 
 */
function calculateCorrectAnwser() {

    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return[operand1 + operand2, "addition"];
    } else { 
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`; 
    }

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplayQuestions() {

}