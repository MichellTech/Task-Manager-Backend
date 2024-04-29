 const connectDB = require("./db/connect")
 const express =  require("express")
const app = express()
const tasks = require("./routes/tasks")
const notFound = require("./middlewares/not-found")
require("dotenv").config()
// middleware
app.use(express.json())
app.use(notFound)

// home route
app.get("/",(req,res)=>{
    res.send("Task manager App project oo")
     })
    
    //  get all task
    app.use("/api/v1/tasks", tasks)

const port = process.env.PORT || 4000

// server start
const start = async () =>{
    try {
       await connectDB(process.env.MONGO_URL) 
       app.listen(port, ()=>{
        console.log("server started on port 4000")
     })
    } catch (error) {
       console.log(error) 
    }
}

start()
 

