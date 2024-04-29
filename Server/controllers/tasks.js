const Task =  require("../models/Task")

const getAllTasks = async (req,res)=>{
    try {
      const alltasks = await Task.find({}) 
      res.status(200).json({alltasks}) 
    } catch (error) {
        res.status(500).json({message : error})  
    }
}

const addTask = async (req,res)=>{
    try {
        const task =  await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
      res.status(500).json({message : error})  
    }
   
}

const getSingleTask = async (req,res)=>{
    try {
        const singleTask = await Task.findOne({_id:req.params.id})
        if(!singleTask){
            return res.status(404).json({message: "No Task with ID exists"})
        }
res.status(200).json({singleTask})
    } catch (error) {
        res.status(500).json({message : error})   
    }
    

   
}

const updateTask =  async (req,res)=>{
try {
    const task = await  Task.findOneAndUpdate({_id: req.params.id},req.body,{
        new:true,
        runValidators:true
    })
    if(!task){
        return res.status(404).json({message: "No Task with ID exists"})
    }

    res.status(200).json({success:true, data:task})
} catch (error) {
    res.status(500).json({message : error})     
}
}

const deleteTask = async (req,res)=>{
    try {
        const task = await Task.findOneAndDelete({_id: req.params.id})
        if(!task){
            return res.status(404).json({
                message: "No file found with this ID"
            })
        }
        res.status(200).json({success: true ,  taskDeleted : task}) 
    } catch (error) {
      res.status(500).json({message:error})  
    }
    
}


module.exports = {getAllTasks, addTask, updateTask, getSingleTask,deleteTask}