const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;
const uuid = require("uuid/v4");

module.exports = {
    async createTask(title, description){
        if (!title) throw "You must provide a title for your task";
        if (!description || typeof description !== "string")
          throw "You must provide an array of description";

        const taskCollection = await todoItems();        
        let id = uuid();
        let newTask = {
            _id: id,
            title: title,
            description: description,
            completed: false,
            completedAt: null
        };
    
        const insertInfo = await taskCollection.insertOne(newTask);
        if (insertInfo.insertedCount === 0) throw "Could not create task"; 
        const newId = insertInfo.insertedId;
        const task = await this.getTask(newId);
        return task;
    },


    async getAllTasks(){
        const taskCollection = await todoItems();
        const tasks = await taskCollection.find({}).toArray();
        return tasks;

    },

    async getTask(id){
        if (!id) throw "You must provide an id to search for";
        const taskCollection = await todoItems();
        const taskGet = await taskCollection.findOne({ _id: id });
        if (taskGet === null) throw "No task with that id";
        return taskGet;
    },

    async completeTask(taskId){
        if (!taskId || typeof taskId !== "string")
            throw "You must provide an string of taskId";

        const taskCollection = await todoItems();
        const updatedtask = {
            _id: taskId, 
            title: await this.getTask(taskId)["title"],
            description: await this.getTask(taskId)["description"],
            completed: true,
            completedAt: new Date()
        };
    
        // const updatedInfo = await taskCollection.updateOne({ _id: taskId }, updatedtask);
        const update = await taskCollection.replaceOne({_id: taskId}, updatedtask, true);
        if (update.modifiedCount === 0) {
            throw "could not update task successfully";
        }
        return await this.getTask(taskId);
    },

    async removeTask(id){
        if (!id || typeof id !== "string") 
            throw "You must provide a string of id to search for";

        const taskCollection = await todoItems();
        const deletionInfo = await taskCollection.removeOne({ _id: id });

        if (deletionInfo.deletedCount === 0) {
            throw `Could not delete task with id of ${id}`;
        }

        return true;
    }
}