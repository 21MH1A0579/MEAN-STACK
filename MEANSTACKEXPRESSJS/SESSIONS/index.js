const express=require('express');
const session=require('express-session')
const app=express();
app.listen(3000,()=>{
    console.log("Server Running Successfully");
})
app.use(session(
    {
        secret:'acoecse',
        saveUninitialized:true,
    }
))
app.get('/cse',(req,res)=>{
    req.session.name='prasad';
    res.send('welcome to sessions');
    
})
app.get('/sessionid',(req,res)=>{
    res.send("Your Session ID is"+req.session.name)
})