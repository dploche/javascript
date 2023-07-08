let taskCounter = 1;

function addTasks() {
  let taskInput = document.getElementById('taskInput');
  let taskInputValue = taskInput.value;
  let ul = document.getElementById("taskList");
  let li = document.createElement("li");

  //Create a new span for the task text
  let taskTextSpan = document.createElement('span');
  taskTextSpan.textContent = taskInputValue;

  //Create checkbox for task
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'checkbox' + taskCounter;
  checkbox.className = 'taskCheckbox';

  //Function to mark tasks as done
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      taskTextSpan.style.textDecoration = "line-through";
    } else {
      taskTextSpan.style.textDecoration = "none";
    }
  });

  //Delete button
  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.id = 'deleteButton' + taskCounter;
  deleteButton.className = 'deleteButton';

  //Function to delete tasks
  deleteButton.addEventListener('click', function() {
    ul.removeChild(li);
  });

  //Append the checkbox, task text and delete button to the li
  li.appendChild(checkbox);
  li.appendChild(taskTextSpan);
  li.appendChild(deleteButton);

  //Set the id for the li and append it to the ul
  li.id = 'task' + taskCounter;
  ul.appendChild(li);

  taskCounter += 1;

  //Clear the input field
  taskInput.value = '';
}

//Event listener for the input field
document.getElementById('taskInput').addEventListener('keypress', function(event) {
  //If the key pressed was 'Enter', add the task
  if (event.keyCode == 13) {
    event.preventDefault();//prevent the default action
    addTasks();
  }
});
//Enable or disable dark mode
document.getElementById('nightModeBtn').addEventListener('click', function() {
    let bodyStyles = window.getComputedStyle(document.body);
    let isNightMode = bodyStyles.getPropertyValue('--text-color') === '#fff';
    if (isNightMode) {
        // Switch to day mode
        document.documentElement.style.setProperty('--bg-color', '#f4f4f4');
        document.documentElement.style.setProperty('--text-color', '#000');
        document.documentElement.style.setProperty('--button-color', '#5C9B76');
        document.documentElement.style.setProperty('--button-hover-color', '#36855B');
        document.documentElement.style.setProperty('--li-bg-color', '#fff');
        document.documentElement.style.setProperty('--li-border-color', '#ddd');
        document.documentElement.style.setProperty('--li-text-color', '#000');
        document.documentElement.style.setProperty('--delete-button-color', 'red');
        document.documentElement.style.setProperty('--delete-button-hover-color', 'darkred');
        this.textContent = 'Night Mode';
    } else {
        // Switch to night mode
        document.documentElement.style.setProperty('--bg-color', '#000');
        document.documentElement.style.setProperty('--text-color', '#fff');
        document.documentElement.style.setProperty('--button-color', '#444');
        document.documentElement.style.setProperty('--button-hover-color', '#222');
        document.documentElement.style.setProperty('--li-bg-color', '#222');
        document.documentElement.style.setProperty('--li-border-color', '#444');
        document.documentElement.style.setProperty('--li-text-color', '#fff');
        document.documentElement.style.setProperty('--delete-button-color', '#888');
        document.documentElement.style.setProperty('--delete-button-hover-color', '#666');
        this.textContent = 'Light Mode';
    }
});
