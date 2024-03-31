const express=require('express');
const app=express();
app.listen(4000,()=>{
    console.log("server running successfully");
});

app.get('/cse/:id([0-9]{3})',(req,res)=>{
   res.send('welcome to CSE'); 
})
app.get('*',(req,res)=>{
    next(err);
})
app.use(function(err,req,res,next){
    res.status(500); 
    res.send("No URL Found");
})