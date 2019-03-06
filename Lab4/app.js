const todoItems = require("./todo");

async function main() {
    //create a task and log it
    //console.log("the first task is: ",await todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"));

    //create a new task
    //await todoItems.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");

    // query all tasks and log them
    const getTasks1 = await todoItems.getAllTasks();
    console.log("current all tesks are: ",getTasks1);

    //remove the first task
    try{
        await todoItems.removeTask(getTasks1[0]._id);
    }catch(error){
        console.error(error);
    }

    //query all the remaining tasks and log them
    // const getTasks2 = await todoItems.getAllTasks();
    // console.log("the remaining tasks after remove are: ",getTasks2);

    // Complete the remaining task
    // // const getTasks3 = new Array();
    // try{
    //     for(var i=0;i < getTasks2.length;i++){
    //         await todoItems.completeTask(getTasks2[i]._id); 
    //     }
    // }catch(error){
    //     console.error(error);
    // }

    //log the task that has been completed with its new value
    // console.log("the tasks with new value are: ",getTasks3);
    console.log("current all tesks are: ",await todoItems.getAllTasks());




    // 模糊搜索

    const Task = await todoItems.task("Helix");
    console.log("task",Task);



}

main();