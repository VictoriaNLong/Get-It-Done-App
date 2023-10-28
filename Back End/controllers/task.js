const Task = require('../models/Tasks')

const createTask = async (req, res, next) => {
    try{
        const newTask = new Task({
            title: req.body.title,
            user: req.user.id,
            completed: req.body.completed
        })
        const savedTask = await newTask.save()
        return res.status(201).json(savedTask)
    }catch(err){
        return next(err)
    }
}

const getTasks = async (req, res, next) => {
    try{
        const tasks = await Task.find({})
        return res.status(200).json(tasks)
    }catch(err){
        return next(err)
    }
}

module.exports = {createTask, getTasks}