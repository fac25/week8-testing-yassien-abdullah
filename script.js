//fn to get the user input and add a task to the list
const form = document.getElementById("theForm");

form.addEventListener("submit", addTask);

//variable to be incremented after each task is successfully added
let taskNumber = 0;

function addTask(event) {
    event.preventDefault();

    //increment the taskCounter
    taskNumber++;

    //get the task
    let taskUserWantsToAdd = document.getElementById("taskToAdd").value;
    console.log(taskUserWantsToAdd);

    //get the list
    const toDoList = document.getElementById("theList");
    console.log(toDoList);

    //now that a task has been added, write into the relevant h2
    let h2 = document.getElementById("h2ForIncompleteTasks");
    h2.innerHTML = "Tasks yet to be done";

    //add task, checkbox and delete button to the list
    toDoList.innerHTML += `<li id="Task${taskNumber}">` +
    `<input type="checkbox" id="checkboxForTask${taskNumber}"` + 
    `aria-label="Mark this task as completed" class="checkbox">` + 
    `<span id="task${taskNumber}Text">${taskUserWantsToAdd}</span>` +
    `<span id="deleteTask${taskNumber}" class="delete"` + 
    `aria-label="Delete this task from the to-do list">&times;</span>` + 
    `</li>`


    /*loop through all the complete buttons and add event listeners for them so they can 
    be marked as complete when clicked

    Note: When you attach an event handler inline, eg onclick=“markCompleted()”, 
    within the function "this" refers to window. so basically use event handlers IN 
    the js file instead of onclick, onchange etc in the html element if you want to 
    get the value or id of “this” otherwise you just get undefined
    
    Note2: For some reason the buttons dont work if they event listeners are added 
    AFTER/outside the addTask fn scope*/
    const checkboxes = document.querySelectorAll(".checkbox");
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].addEventListener("click", markCompleted); 
    }
    
    //same again for the delete "buttons"
    const deleteButtons = document.querySelectorAll(".delete");
    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", deleteFromList);
    }

    //empty the textarea for the subsequent tasks to be added
    document.getElementById("taskToAdd").value = "";
}





function markCompleted(){
    console.log(this.id);

    //first get the task number for which the checkbox was clicked
    let taskNumberForClickedCheckbox = this.id.slice(15);
    console.log(taskNumberForClickedCheckbox);

    //then get the span containing the task text
    let idOfSpanContainingTaskText = `task${taskNumberForClickedCheckbox}Text`;
    let taskTextSpan = document.getElementById(idOfSpanContainingTaskText);
    
    //then add the completed-task class to that span
    taskTextSpan.className += "completed-task";

    //then remove the checkbox 
    this.parentNode.removeChild(this);

    //then move the completed task below the non-completed tasks
    let listOfCompletedTasks = document.getElementById("theCompletedTasks");
    let idOfTaskToMove = `Task${taskNumberForClickedCheckbox}`;
    let taskToMove = document.getElementById(idOfTaskToMove);
    listOfCompletedTasks.appendChild(taskToMove);

    //now that a task has been marked as complete, write into the relevant h2
    let h2 = document.getElementById("h2ForCompletedTasks");
    h2.innerHTML = "Completed tasks";

    if(//i.e if there are no more incomplete tasks
        document.getElementById("theList").childElementCount == 0
    ){//remove the relevant h2's text
        document.getElementById("h2ForIncompleteTasks").innerHTML = ""
    }
   

    
}


function deleteFromList() {
    console.log(this.id);

    let idOfElementToBeRemoved = this.id.slice(6);
    console.log(idOfElementToBeRemoved);

    const elementToRemove = document.getElementById(idOfElementToBeRemoved);
    elementToRemove.parentNode.removeChild(elementToRemove);

    if(//i.e if there are no more incomplete tasks
        document.getElementById("theList").childElementCount == 0
    ){//remove the relevant h2's text
        document.getElementById("h2ForIncompleteTasks").innerHTML = ""
    }

    if(//i.e if there are no more completed tasks
        document.getElementById("theCompletedTasks").childElementCount == 0
    ){//remove the relevant h2's text
        document.getElementById("h2ForCompletedTasks").innerHTML = ""
    }
   


}