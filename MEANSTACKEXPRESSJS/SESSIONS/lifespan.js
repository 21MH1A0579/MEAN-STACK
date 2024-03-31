const express=require('express');
const session=require('express-session')
const app=express();
app.listen(3000,()=>{
    console.log("Server Running SUccessfully")
})
app.use(session(
    {
        secret:'meanstack'
    }
))
app.get('/cse',(req,res)=>{
    req.session.name='acoecse';
    res.send('Session Created')
})
app.get('/view',(req,res)=>{
    res.send("Your Session ID is "+req.session.name)
})
