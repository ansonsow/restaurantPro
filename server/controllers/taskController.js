

let Task = require("../models/tasks")

const getTask = (req,res)=>{
    // let newTask = new Task
    let tasks = Task.find().then(result=>{
        res.status(201)
           .json(result)
    });
    // Task.find()
}

const saveTask = (req,res) =>{
    
    let newTask = new Task(req.body);
    newTask.save().then(
        result=>{
            res.status(201)
               .json(newTask);
        }
    ).catch(error=>{
        res.status(500)
           .json(error);
    })
    // res.send("woo")
}



module.exports= {getTask,saveTask}