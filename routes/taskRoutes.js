const express = require('express')
const router = express.Router()
// import from modules 
const Task = require('../models/task')
//get all tasks 
router.get('/tasks', async (req , res) => {
    try{
        const tasks = await Task.find()
        res.status(200).json(tasks)

    }catch(error){
        res.status(500).json({error : error.message})

    }
})

//creat task 
router.post('/tasks', async (req ,res) => {
    try{
        const task = new Task(req.body)
        await task.save();
        res.status(201).json({message : 'Added Successfuly! ', task})

    }catch(error){
        res.status(400).json({error : error.message})

    }

})

//change task 
router.put('/tasks/:id',async (req, res) =>{
    try{
        const { id } = req.params;
        const dataToUpdate = req.body;
        const task = await Task.findByIdAndUpdate(id,dataToUpdate,{new : true})
        res.status(200).json({message :"Updated Successfully!",task })
        
    }catch(error){
        res.status(400).json({error : error.massege })
    }
})

//delete task 
router.delete('/tasks/:id', async (req, res)=> {
    try{
        const { id }= req.params;
         await Task.findByIdAndDelete(id)
        res.status(200).json({massge :'Deleted Successfuly'})

    }catch(error){
        res.status(400).json({error : error.massege})
    }
})

// export router 
module.exports = router;