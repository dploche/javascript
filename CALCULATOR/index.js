let nums = [];
let displayText = document.getElementById('displayText');
let numDiv = document.getElementById('askForNum');
let operandDiv = document.getElementById('showSupportedOperations');
let resultDiv = document.getElementById('showResult');
let userInput = document.getElementById('userInput');

function numSubmit(){
    let numToSend = userInput.value;
    let integrityResult = checkNumIntegrity(numToSend);
    integrityResult ? (nums.push(numToSend), console.log(nums)) : window.alert("That's not a number...");
    nums.length === 1 ? (displayText.innerHTML = 'Great! Now, insert a second number', userInput.value = '') : null;
    nums.length === 2 ? (numDiv.style.display = 'none', operandDiv.style.display = 'inline') : null;
}

function checkNumIntegrity (num){
    if(isNaN(num)){
        return false;
    }else{
        console.log(`${num} is a number!`);
        return true;
    }
}

let result;

function sumNums(){
    result = Number(nums[0]) + Number(nums[1]);
    showResult(result);
}

function substractNums(){
    result = Number(nums[0]) - Number(nums[1]);
    showResult(result);
}

function multiplyNums(){
    result = Number(nums[0]) * Number(nums[1]);
    showResult(result);
}

function divideNums(){
    result = Number(nums[0]) / Number(nums[1]);
    showResult(result);
}

function showResult(num){
    operandDiv.style.display = 'none';
    resultDiv.style.display = 'inline';
    let finalResult = document.getElementById('finalResult');
    finalResult.innerHTML = `Your result is: ${num}`;
}