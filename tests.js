test("Adding a task shows it on  the tasks yet to be done list", () => {

    // first get the user input field
    let task = document.getElementById("taskToAdd");
    // Add the task text to it
    task.value = "Test task";
    
    //then get the submit button
    let addButton = document.querySelector("[type='submit']");

    // click to add the task to the uncompleted tasks list
    addButton.click();

    // Reset the user input field
    task.value = "";

    // Get the uncompleted list and the last task added
    let uncompletedTasksList = document.querySelector("#theList");
    let lastItem = uncompletedTasksList.querySelector("li:last-child");


    // Check the last item added task text to the one you added before "Test task"
    let result = lastItem.querySelector("label").textContent;
    const expected = "Test task";

    //now compare them
    equal(result, expected);

    // Remove the task from the UI and the tasks array, so it doesn't mess with other tests.
    let splitId = lastItem.id.split("-");
    // Get the number of the id
    let id = splitId[1];
    // Find the index of the task in the task array that matches the number if the id of the list item
    let ind = tasksArray.findIndex(el => el.id === Number(id));
    // Remove the deleted task from the tasks array
    tasksArray.splice(ind, 1);
    uncompletedTasksList.removeChild(lastItem);
    
});

// test("Deleting an entry removes it from the tasks yet to be done list", () => {

//     // first get the entry to be deleted
//     let entryToBeDeleted = document.getElementById("task-1");
    
//     // then get the corresponding delete button for that entry
//     let correspondingDeleteButton = document.getElementById("delete-task-1");

//     //then click that delete button
//     correspondingDeleteButton.click();

//     //then set a 'result' and 'expected' to compare using the equal fn
//     let result = document.getElementById("task-1");
//     const expected = null;

//     //now compare them
//     equal(result, expected);

//     // Check if the element is removed from the array
//     let filtered = tasksArray.filter(el => el.id === 1);
//     equal(0, filtered.length);

//     /*the test passes, as it should*/

//     // Add the element again to the incompleted list
//     let task = createTask("Get groceries", 1);
//     toDoList.prepend(task);

//     // Add the element again to the tasksArray
//     let taskObject = {
//         task: "Get groceries",
//         id: 1,
//         completed: false
//     }
//     tasksArray.unshift(taskObject);
// });

// test("Deleting an entry removes it from the completed tasks list", () => {

//     // first get the entry to be deleted
//     let entryToBeDeleted = document.getElementById("task-3");
    
//     //then get the corresponding delete button for that entry
//     let correspondingDeleteButton = document.getElementById("delete-task-3");

//     //then click that delete button
//     correspondingDeleteButton.click();

//     //then set a 'result' and 'expected' to compare using the equal fn
//     let result = document.getElementById("task-3");
//     const expected = null;

//     //now compare them
//     equal(result, expected);

//     // Check if the element is removed from the array
//     let filtered = tasksArray.filter(el => el.id === 3);
//     equal(0, filtered.length);

//     // Add the element again to the completed list
//     let task = createTask("Learn more about testing", 3);

//     // Add the completed class to the created task
//     task.querySelector("label").classList.add("completed-task");

//     // Check the checkbox of the created task
//     task.querySelector('input[type="checkbox"]').checked = true;
//     listOfCompletedTasks.append(task);

//     // Because there was only one li when we deleted the task the list was hidden, so we need to show it after we added the item again
//     showOrHideSection()

//     // Add the element again to the tasksArray
//     let taskObject = {
//         task: "Learn more about testing",
//         id: 3,
//         completed: true
//     }

//     //Add the task again to the task array in the correct position
//     tasksArray.splice(2, 0, taskObject);

//     /*the test passes, as it should*/
// });

// test("Checking an entry marks it as complete", () => {

//     // first get the entry to be marked as complete
//     let entryToBeMarkedAsCompleted = document.getElementById("task-4");
    
//     //then get the corresponding checkbox for that entry
//     let correspondingCheckbox = document.getElementById("check-uncheck-task-4");

//     //then click that checkbox
//     correspondingCheckbox.click();

//     //then set a 'result' and 'expected' to compare using the equal fn
//     //theCompletedTasks ul should now contain the li that was marked as completed

//     let result = document.getElementById("theCompletedTasks").contains(entryToBeMarkedAsCompleted);
//     const expected = true;

//     //now compare them
//     equal(result, expected);

//     // After testing return it to incomplete
//     correspondingCheckbox.click();


//     /*the test passes, as it should*/
// });


// test("Unchecking an entry restores it to the tasks yet to be done section", () => {

//     // first get the entry to be unchecked
//     let entryToBeUnMarkedAsCompleted = document.getElementById("task-3");
    
//     //then get the corresponding checkbox for that entry
//     let correspondingCheckbox = document.getElementById("check-uncheck-task-3");

//     //then click that checkbox
//     correspondingCheckbox.click();

//     //then set a 'result' and 'expected' to compare using the equal fn
//     //theList ul should now contain the li that was unchecked

//     let result = document.getElementById("theList").contains(entryToBeUnMarkedAsCompleted);
//     const expected = true;

//     //now compare them
//     equal(result, expected);

//     //After testing return it to complete
//     correspondingCheckbox.click();
    
//     /*the test passes, as it should*/
// });


test("Deleting an entry that a user added (i.e not one of the default ones) removes it from the tasks yet to be done list", () => {

    //first add an entry

    //write into the textarea
    let entryToBeAdded = `Ensure github profile looks nice`;
    document.getElementById("taskToAdd").value = entryToBeAdded;

    //get and then click the add button
    const addButton = document.querySelector("button[type='submit']");
    addButton.click();

    //now get that same entry and delete it
    let entryToBeDeleted = document.getElementById("task-5");
    
    //then get the corresponding delete button for that entry
    let correspondingDeleteButton = document.getElementById("delete-task-5");

    //then click that delete button
    correspondingDeleteButton.click();

    //then set a 'result' and 'expected' to compare using the equal fn
    let result = document.getElementById("task-5");
    const expected = null;

    //now compare them
    equal(result, expected);

    /*the test passes, as it should*/
});

test("Checking an entry that a user added (i.e not one of the default ones) marks it as complete", () => {

    //first add an entry

    //write into the textarea
    let entryToBeAdded = `Commit code to github on 08/07`;
    document.getElementById("taskToAdd").value = entryToBeAdded;

    //get and then click the add button
    const addButton = document.querySelector("button[type='submit']");
    addButton.click();


    // now mark that same entry as complete
    let entryToBeMarkedAsCompleted = document.getElementById("task-5");
    
    //then get the corresponding checkbox for that entry
    let correspondingCheckbox = document.getElementById("check-uncheck-task-5");

    //then click that checkbox
    correspondingCheckbox.click();

    //then set a 'result' and 'expected' to compare using the equal fn
    //theCompletedTasks ul should now contain the li that was marked as completed

    let result = document.getElementById("theCompletedTasks").contains(entryToBeMarkedAsCompleted);
    const expected = true;

    //now compare them
    equal(result, expected);

    // Remove the new task from the tasks array and the completed tasks list after testing
    tasksArray.pop()
    listOfCompletedTasks.removeChild(entryToBeMarkedAsCompleted)


    /*the test passes, as it should*/
});


test("Unchecking an entry that a user added (i.e not one of the default ones) and marked as complete restores it to the tasks yet to be done section", () => {


    //first add an entry

    //write into the textarea
    let entryToBeAdded = `Find the fountain of youth`;
    document.getElementById("taskToAdd").value = entryToBeAdded;

    //get and then click the add button
    const addButton = document.querySelector("button[type='submit']");
    addButton.click();

    // now mark that same entry as complete (only to be unchecked later)
    let entryToBeMarkedAsCompletedAndThenUnchecked = document.getElementById("task-5");
    
    //then get the corresponding checkbox for that entry
    let correspondingCheckbox = document.getElementById("check-uncheck-task-5");

    //then click that checkbox
    correspondingCheckbox.click();

    //then click that checkbox again to mark it in-complete this time
    correspondingCheckbox.click();


    //then set a 'result' and 'expected' to compare using the equal fn
    //theList ul should now contain the li that was unchecked

    let result = document.getElementById("theList").contains(entryToBeMarkedAsCompletedAndThenUnchecked);
    const expected = true;

    //now compare them
    equal(result, expected);

    // Remove the new task from the tasks array and the completed tasks list after testing
    tasksArray.pop()
    toDoList.removeChild(entryToBeMarkedAsCompletedAndThenUnchecked)


    /*the test passes, as it should*/
});