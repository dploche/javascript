const wantedAttributes = ['login', 'id', 'name', 'location', 'html_url'];

const retriveUserInfo = async (user) => {
    try {
        let table = document.getElementById('jsonTable'); //get table
        table.innerHTML = ""; //clear table
        let errorSpan = document.getElementById('jsonResponse'); //get span to display error message
        const response = await fetch('https://api.github.com/users/' + user);
        if (!response.ok) { // check if request failed
            if(response.status === 404){
                errorSpan.style.display = 'inline';
                throw new Error('404: User not found');
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            errorSpan.style.display = 'none';
            const myJson = await response.json();
            let firstRow = table.insertRow() 
            let attributeHeader = firstRow.insertCell();
            let valueHeader = firstRow.insertCell();
            attributeHeader.innerHTML = 'Attribute';
            valueHeader.innerHTML = 'Value';
            attributeHeader.classList.add('bold');
            valueHeader.classList.add('bold');
            for(let i in myJson){
                if((wantedAttributes.includes(i)) && myJson[i] !== null){
                    let newRow = table.insertRow();
                    let cell1 = newRow.insertCell(0);
                    let cell2 = newRow.insertCell(1);
                    cell1.innerHTML = i;
                    cell2.innerHTML = myJson[i];
                }
            }
            document.getElementById('jsonResponse').innerHTML = JSON.stringify(myJson, null, 2);
        }
    } catch (error) {
        console.error('An error occurred while making request:', error);
        document.getElementById('jsonResponse').innerHTML = error.message;
    }
}

function onSearch() {
    let userName = document.getElementById('userInput').value;
    retriveUserInfo(userName);
}
