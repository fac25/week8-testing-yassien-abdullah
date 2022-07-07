test("Deleting an entry removes it from the tasks yet to be done list", () => {

    // first get the entry to be deleted
    let entryToBeDeleted = document.getElementById("task-1");
    
    //then get the corresponding delete button for that entry
    let correspondingDeleteButton = document.getElementById("delete-task-1");

    //then click that delete button
    correspondingDeleteButton.click();

    //then set a 'result' and 'expected' to compare using the equal fn
    let result = document.getElementById("task-1");
    const expected = null;

    //now compare them
    equal(result, expected);


    /*the test correctly fails

    note that if you assign result as entryToBeDeleted in line 13, the test DOES NOT work
    remember to ask Oli why*/
});

test("Deleting an entry removes it from the completed tasks list", () => {

    // first get the entry to be deleted
    let entryToBeDeleted = document.getElementById("task-3");
    
    //then get the corresponding delete button for that entry
    let correspondingDeleteButton = document.getElementById("delete-task-3");

    //then click that delete button
    correspondingDeleteButton.click();

    //then set a 'result' and 'expected' to compare using the equal fn
    let result = document.getElementById("task-3");
    const expected = null;

    //now compare them
    equal(result, expected);


    /*the test correctly fails*/
});