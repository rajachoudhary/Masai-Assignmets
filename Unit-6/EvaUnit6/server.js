const PORT = 7000;
const express = require("express")
const bookDet = require('./books.json')
const router = express.Router()


function logger(req,res,next){
    console.log("first")
    next()
    console.log("second")    
}

const app = express()
app.use(express.json())
app.use(logger)

app.get("/books/:id",(req,res) =>{
    console.log("req")
    const id= +req.params.id
    const book = bookDet.find((books)=>books.id === id)
    res.json(book)
})
app.get("/books",(req,res)=>{
    let {author} = req.query
    if(author){
        let authorDet = bookDet.find((authorDet) => authorDet.author === author)
        res.json(authorDet || {})
    } else {
        res.json(bookDet)
    }
  
})



app.post("/books",(req,res)=>{
     
    bookDet.push(req.body)
    res.json(req.body)
   
})
app.patch("/books/:id",(req,res)=>{
    const id = +req.params.id
    console.log(id)
    const authorBody = req.body
    const updateUser = bookDet.map((authorId)=> authorId.id === id ? {...authorId,...authorBody}:authorId  )
    res.json(updateUser)
})
app.delete("/books/:id",(req,res)=>{
    const id = +req.params.id
    const deleteAuthor = bookDet.filter((books)=> books.id !== id)
    res.json(deleteAuthor)
})


app.listen(PORT,()=>{
    console.log(`listening to port : ${PORT}`)
})