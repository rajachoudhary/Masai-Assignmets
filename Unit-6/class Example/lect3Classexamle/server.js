const express = require("express");
const users = require("./users.json")
const PORT = 8000;
let app  = express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/index.html`)
})
app.get("/users",(req,res)=>{
    let {first_name, gender} = req.query
    if(first_name || gender){
        const user = users.find((user)=>user.first_name === first_name && user.gender === gender)
        res.json(user)
    }else {
        res.json(users)
    }
})
app.get("/users",(req,res)=>{
    res.json(users)
})
app.get("/users/:id",(req,res)=>{
    const {id} = req.params
    const user = users.find((user)=>user.id === Number.parseInt(id))
    res.json(user)
})
app.post("/users",(req,res)=>{
    users.push(req.body)
    res.json(req.body)
})
app.listen(PORT,()=>{
    console.log(`Listening at port:${PORT}`);
})
