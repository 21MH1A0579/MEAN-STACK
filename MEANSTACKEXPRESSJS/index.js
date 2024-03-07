const express=require('express');
let app=express();
app.get('/cse',(req,res)=>{
    res.send("Welcome to Express Js from GET");
})
app.post('/cse',(req,res)=>{
    res.send("Welcome to Express Js from POST");
})
app.put('/cse',(req,res)=>{
    res.send("Welcome to Express Js from PUT");
})
app.delete('/',(req,res)=>{
    res.send("Welcome to Express Js from DELETE");
})

app.listen(3000,()=>{
    console.log("server running at 3000");
})
