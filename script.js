//fn to get the user input and add a task to the list
const form = document.getElementById("theForm");
const toDoList = document.getElementById("theList");
const listOfCompletedTasks = document.getElementById("theCompletedTasks");


form.addEventListener("submit", addTask);

// Default tasks
const tasksArray = [
    {
        task: "Get groceries",
        id: 1,
        completed: false
    },
    {
        task: "Finish Execute Programme",
        id: 2,
        completed: false
    },
    {
        task: "Learn more about testing",
        id: 3,
        completed: true
    },
    {
        task: "Finish the testing project",
        id: 4,
        completed: false
    }
]

// Create task
const createTask = (text, id) => {
    // Create a task li element wit an id
    let taskElement = document.createElement("li");
    taskElement.setAttribute("id", `task-${id}`);
    // Create a span to hold the task text
    let taskText = document.createElement("span");
    taskText.textContent = text;
    // Create a checkbox and add the filter functionality to it
    let taskCompleted = document.createElement("input");
    taskCompleted.setAttribute("type", "checkbox");
    taskCompleted.setAttribute("id", `check-uncheck-task-${id}`);
    taskCompleted.addEventListener("change", markCompleted);
    // Create a delete button and add the event listener to it
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", `delete-task-${id}`);
    deleteButton.textContent = "delete";
    deleteButton.addEventListener("click", deleteFromList);
    // Append the created elements to the liste item
    taskElement.append(taskText, taskCompleted, deleteButton);
    // return the item so we can adust its contenet if needed
    return taskElement;
}

//Create an id for new tasks
const createId = (array) => {
    if (array.length === 0) return 1;
    return array[array.length - 1].id + 1;
}

//variable to be incremented after each task is successfully added
// let taskNumber = 0;

// Loop through the default tasks and show them on their respective lists
for (let i = 0; i < tasksArray.length; i++) {
    let task = tasksArray[i];
    let item = createTask(task.task, task.id);
    // If the task completed property is true add it to the completed list and check the checkbox
    if (task.completed) {
        let h2 = document.getElementById("h2ForCompletedTasks");
        h2.innerHTML = "Completed tasks";
        item.querySelector('input[type="checkbox"]').setAttribute("checked", true);
        item.classList.add("completed-task");
        listOfCompletedTasks.append(item);
    }
    // If the task completed property is false add it to the incomplete list
    if (!task.completed) {
        let h2 = document.getElementById("h2ForIncompleteTasks");
        h2.innerHTML = "Tasks yet to be done";
        toDoList.append(item);
    }
}

function addTask(event) {
    event.preventDefault();

    //get the task text
    let taskUserWantsToAdd = document.getElementById("taskToAdd").value;
    console.log(taskUserWantsToAdd);

    //get the list
    const toDoList = document.getElementById("theList");
    console.log(toDoList);

    //now that a task has been added, write into the relevant h2
    let h2 = document.getElementById("h2ForIncompleteTasks");
    h2.innerHTML = "Tasks yet to be done";

    // Add the task to the tasks array
    let newTask = {
        task: taskUserWantsToAdd,
        id: createId(tasksArray),
        completed: false
    }
    tasksArray.push(newTask);
    //add task, checkbox and delete button to the list
    let item = createTask(newTask.task, newTask.id);
    // Append the task to the list
    toDoList.append(item)

    //empty the textarea for the subsequent tasks to be added
    document.getElementById("taskToAdd").value = "";
    console.log(tasksArray)
}

// function addTask(event) {
//     event.preventDefault();

//     //increment the taskCounter
//     taskNumber++;

//     //get the task
//     let taskUserWantsToAdd = document.getElementById("taskToAdd").value;
//     console.log(taskUserWantsToAdd);

//     //get the list
//     const toDoList = document.getElementById("theList");
//     console.log(toDoList);

//     //now that a task has been added, write into the relevant h2
//     let h2 = document.getElementById("h2ForIncompleteTasks");
//     h2.innerHTML = "Tasks yet to be done";

//     //add task, checkbox and delete button to the list
//     toDoList.innerHTML += `<li id="Task${taskNumber}">` +
//     `<input type="checkbox" id="checkboxForTask${taskNumber}"` + 
//     `aria-label="Mark this task as completed" class="checkbox">` + 
//     `<span id="task${taskNumber}Text">${taskUserWantsToAdd}</span>` +
//     `<span id="deleteTask${taskNumber}" class="delete"` + 
//     `aria-label="Delete this task from the to-do list">&times;</span>` + 
//     `</li>`


//     /*loop through all the complete buttons and add event listeners for them so they can 
//     be marked as complete when clicked

//     Note: When you attach an event handler inline, eg onclick=“markCompleted()”, 
//     within the function "this" refers to window. so basically use event handlers IN 
//     the js file instead of onclick, onchange etc in the html element if you want to 
//     get the value or id of “this” otherwise you just get undefined
    
//     Note2: For some reason the buttons dont work if they event listeners are added 
//     AFTER/outside the addTask fn scope*/
//     const checkboxes = document.querySelectorAll(".checkbox");
//     for (let i = 0; i < checkboxes.length; i++) {
//       checkboxes[i].addEventListener("click", markCompleted); 
//     }
    
//     //same again for the delete "buttons"
//     const deleteButtons = document.querySelectorAll(".delete");
//     for (let i = 0; i < deleteButtons.length; i++) {
//       deleteButtons[i].addEventListener("click", deleteFromList);
//     }

//     //empty the textarea for the subsequent tasks to be added
//     document.getElementById("taskToAdd").value = "";
// }





// function markCompleted(){
//     console.log(this.id);

//     //first get the task number for which the checkbox was clicked
//     let taskNumberForClickedCheckbox = this.id.slice(15);
//     console.log(taskNumberForClickedCheckbox);

//     //then get the span containing the task text
//     let idOfSpanContainingTaskText = `task${taskNumberForClickedCheckbox}Text`;
//     let taskTextSpan = document.getElementById(idOfSpanContainingTaskText);
    
//     //then add the completed-task class to that span
//     taskTextSpan.className += "completed-task";

//     //then remove the checkbox 
//     this.parentNode.removeChild(this);

//     //then move the completed task below the non-completed tasks
//     let listOfCompletedTasks = document.getElementById("theCompletedTasks");
//     let idOfTaskToMove = `Task${taskNumberForClickedCheckbox}`;
//     let taskToMove = document.getElementById(idOfTaskToMove);
//     listOfCompletedTasks.appendChild(taskToMove);

//     //now that a task has been marked as complete, write into the relevant h2
//     let h2 = document.getElementById("h2ForCompletedTasks");
//     h2.innerHTML = "Completed tasks";

//     if(//i.e if there are no more incomplete tasks
//         document.getElementById("theList").childElementCount == 0
//     ){//remove the relevant h2's text
//         document.getElementById("h2ForIncompleteTasks").innerHTML = ""
//     }
   

    
// }


function markCompleted(){
    // Get the id of the task
    let splitId = this.parentElement.id.split("-");
    // Get the number of the id
    let id = splitId[1];
    // Find the index of the task in the task array that matches the number if the id of the list item
    let ind = tasksArray.findIndex(el => el.id === Number(id));
    if (this.checked) {
        //now that a task has been marked as complete, write into the relevant h2
        let h2 = document.getElementById("h2ForCompletedTasks");
        h2.innerHTML = "Completed tasks";
        // Change the completed state if the task inside the tasks array to reflect the change
        tasksArray[ind].completed = true;
        this.parentElement.classList.add("completed-task");
        //Add the task to the completed list
        listOfCompletedTasks.append(this.parentElement);
        // Remove the task from the incompleted list
        if(toDoList.querySelector(`${this.parentElement.id}`)) {
            toDoList.removeChild(this.parentElement);
        }
    } else {
        //now that a task has been marked as incomplete, write into the relevant h2
        let h2 = document.getElementById("h2ForIncompleteTasks");
        h2.innerHTML = "Tasks yet to be done";
        // Change the completed state if the task inside the tasks array to reflect the change
        tasksArray[ind].completed = false;
        this.parentElement.classList.remove("completed-task");
        //Add the task to the incomplete list
        toDoList.append(this.parentElement);
        // Remove the task from the completed tasks list
        if(listOfCompletedTasks.querySelector(`${this.parentElement.id}`)) {
            listOfCompletedTasks.removeChild(this.parentElement);
        }
    }

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


// function deleteFromList() {
//     console.log(this.id);

//     let idOfElementToBeRemoved = this.id.slice(6);
//     console.log(idOfElementToBeRemoved);

//     const elementToRemove = document.getElementById(idOfElementToBeRemoved);
//     elementToRemove.parentNode.removeChild(elementToRemove);

//     if(//i.e if there are no more incomplete tasks
//         document.getElementById("theList").childElementCount == 0
//     ){//remove the relevant h2's text
//         document.getElementById("h2ForIncompleteTasks").innerHTML = ""
//     }

//     if(//i.e if there are no more completed tasks
//         document.getElementById("theCompletedTasks").childElementCount == 0
//     ){//remove the relevant h2's text
//         document.getElementById("h2ForCompletedTasks").innerHTML = ""
//     }
   


// }


function deleteFromList() {
    
    // Get the id of the task
    let splitId = this.parentElement.id.split("-");
    // Get the number of the id
    let id = splitId[1];
    // Find the index of the task in the task array that matches the number if the id of the list item
    let ind = tasksArray.findIndex(el => el.id === Number(id));
    // Remove the deleted task from the tasks array
    tasksArray.splice(ind, 1);
    // Remove the task from the list it was in
    const elementToRemove = document.getElementById(this.parentElement.id);
    elementToRemove.parentElement.removeChild(elementToRemove);

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