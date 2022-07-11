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

// Show or hide the list section depending if it has tasks or not
const showOrHideSection = () => {
    if(//i.e if there are no more incomplete tasks
        document.getElementById("theList").childElementCount == 0
    ){//remove the relevant h2's text
        document.querySelector(".unfinished-section").classList.add("hidden")
    } else {
        document.querySelector(".unfinished-section").classList.remove("hidden")
    }

    if(//i.e if there are no more completed tasks
        document.getElementById("theCompletedTasks").childElementCount == 0
    ){//remove the relevant h2's text
        document.querySelector(".completed-section").classList.add("hidden")
    } else {
        document.querySelector(".completed-section").classList.remove("hidden")
    }
}

// Create task
const createTask = (text, id) => {
    // Create a task li element wit an id
    let taskElement = document.createElement("li");
    taskElement.setAttribute("id", `task-${id}`);
    // Create a span to hold the task text
    let taskText = document.createElement("label");
    taskText.textContent = text;
    taskText.setAttribute("for", "check-uncheck-task-" + id);
    // Create a checkbox and add the filter functionality to it
    let taskCompleted = document.createElement("input");
    taskCompleted.setAttribute("type", "checkbox");
    taskCompleted.setAttribute("id", `check-uncheck-task-${id}`);
    taskCompleted.addEventListener("change", markCompleted);
    // Create a delete button and add the event listener to it
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", `delete-task-${id}`);
    deleteButton.textContent = "delete";
    deleteButton.classList.add("delete")
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



// Loop through the default tasks and show them on their respective lists
for (let i = 0; i < tasksArray.length; i++) {
    let task = tasksArray[i];
    let item = createTask(task.task, task.id);
    // If the task completed property is true add it to the completed list and check the checkbox
    if (task.completed) {
        let h2 = document.getElementById("h2ForCompletedTasks");
        h2.innerHTML = "Completed tasks";
        item.querySelector('input[type="checkbox"]').setAttribute("checked", true);
        item.querySelector('label').classList.add("completed-task");
        listOfCompletedTasks.append(item);
    }
    // If the task completed property is false add it to the incomplete list
    if (!task.completed) {
        let h2 = document.getElementById("h2ForIncompleteTasks");
        h2.innerHTML = "Tasks yet to be done";
        toDoList.append(item);
    }
}

showOrHideSection();

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
    showOrHideSection();
}








function markCompleted(){
    // Get the id of the task
    let splitId = this.parentElement.id.split("-");
    // Get the number of the id
    let id = splitId[1];
    // Find the index of the task in the task array that matches the number if the id of the list item
    let ind = tasksArray.findIndex(el => el.id === Number(id));
    if (this.checked) {
        // Change the completed state if the task inside the tasks array to reflect the change
        tasksArray[ind].completed = true;

        this.parentElement.querySelector('label').classList.add("completed-task");
        //Add the task to the completed list
        listOfCompletedTasks.append(this.parentElement);
        // Remove the task from the incompleted list
        if(toDoList.querySelector(`${this.parentElement.id}`)) {
            toDoList.removeChild(this.parentElement);
        }
    } else {
        // Change the completed state if the task inside the tasks array to reflect the change
        tasksArray[ind].completed = false;
        this.parentElement.querySelector('label').classList.remove("completed-task");
        //Add the task to the incomplete list
        toDoList.append(this.parentElement);
        // Remove the task from the completed tasks list
        if(listOfCompletedTasks.querySelector(`${this.parentElement.id}`)) {
            listOfCompletedTasks.removeChild(this.parentElement);
        }
    }
    showOrHideSection();
   

    
}





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

    showOrHideSection();

}