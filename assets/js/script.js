document.addEventListener("DOMContentLoaded",function(){
    let buttons= document.getElementsByTagName("button");
for (let button of buttons){
    button.addEventListener("click", function(){
        if(this.getAttribute("data-type") === "submit"){
            checkAnswer();
        
        }else{
            let gameType = this.getAttribute("data-type");
            runGame(gameType);
            }
        })
    }
    runGame("addition");
})
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType){

   let num1= Math.floor(Math.random() * 25)+1;
   let num2= Math.floor(Math.random() * 25)+1;
   if (gameType === "addition"){
    displayAdditionQuestion(num1,num2);
   }else if (gameType === "multiply"){
    displayMultiplyQuestion(num1,num2);
   }else if(gameType === "subtract") {
    displaySubtractQuestion(num1,num2);

   }else if(gameType === "division"){
    displayDivideQuestion(num1,num2);
    
   }
   else{
    alert(`Unkown game type: ${gameType}`);
    throw`Unkown game type: ${gameType}. Aborting`;
   }
}
/**
 * Checks the user inputed answer agianst the first element of 
 * the returned array from calculateCorrectAnswer()
 */
function checkAnswer(){
    let userAnswer= parseInt(document.getElementById('answer-box').value)
    let correctAnswer = calculateCorrectAnswer()
    let isCorrect = userAnswer === correctAnswer[0]
    if (isCorrect){
        alert(`You have got it right!`)
        incrementScore()

    }else{
        alert(`Awww...You have entered ${userAnswer}, the correct answer is ${correctAnswer[0]}`)
        incrementWrongAnswer()
    }
    runGame(correctAnswer[1]);
}
/**
 * Gets operands (the numbers) and the operator
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;
    if (operator === "+"){
        return [operand1 + operand2, "addition"];
    }else if(operator === "*"){
        return [operand1 * operand2, "multiply"];
    }else if(operator === "/"){
        return [operand1 / operand2, "division"];
    }else if(operator === "-"){
        return [operand1 - operand2, "subtract"];
    }
    else{
        alert(`Uninmplemented operator ${operator}`);
        throw`Uninmplemented operator ${operator}.Aborting!`;
    }
}
/**
 * increment the correct answer score
 */
function incrementScore(){
    let score = parseInt(document.getElementById('score').innerText);
    score += 1;
    document.getElementById('score').innerText = score;
}
/**
 * increment the wrong answer tally
 */
function incrementWrongAnswer(){
    let incorrect = parseInt(document.getElementById('incorrect').innerText);
    incorrect +=1;
    document.getElementById('incorrect').innerText = incorrect;
}
/**
 * Displays the addition quest
 */
function displayAdditionQuestion (operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}
/**
 * Displays the Subtraction question
 */
function displaySubtractQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "-";
    
}
/**
 * Displays the Multipication question
 */
function displayMultiplyQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "*";
    
}
/**
 * Displays the Division question
 */
function displayDivideQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";
    
}