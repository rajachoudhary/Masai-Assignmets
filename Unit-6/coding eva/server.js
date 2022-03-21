const express = require(`express`)
const mongoose = require('mongoose')
// const animals = require('./animalData.json')
const PORT = 5000;

const url = ("mongodb://localhost:27017/Animal")
mongoose.connect(url)

let db = mongoose.connection

let app  = express();
app.use(express.json())

const animalTodos = require('./Schema/animal.schema')
const todo = mongoose.model("todos",animalTodos)

app.listen(PORT,()=>{
    console.log(`Listening at port:${PORT}`);
})

app.get("/animals",async(req,res)=>{
    let todos = await todo.find({}) 
    res.status(200).json(todos)
})
app.post("/animals",(req,res)=>{
    todos.push(req.body)
    res.json(req.body)
})
// module.exports = connect