function generateRandomColor(){
    let hexCode = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('colorPicker').value = hexCode;
    document.getElementById('square').style.backgroundColor = hexCode;
    document.getElementById('hexCode').innerHTML = hexCode;
}

function assignColorToSquare(){
    let chosenColor = document.getElementById('colorPicker').value;
    document.getElementById('square').style.backgroundColor = chosenColor;
    document.getElementById('hexCode').innerHTML = chosenColor;
}