const express=require('express');
const session=require('express-session')
const app=express();
app.listen(3000,()=>{
    console.log("Server Running Successfully");
})
app.use(session({
    secret:'meanstack',
    cookie:{
        maxAge:30000,
    }
}))
//let count=0;
app.get('/count',(req,res)=>{
    // count++;
    // res.send("Number of Views "+count);
    if(req.session.count)
    {
        req.session.count++;
        res.send("Number of Views: "+req.session.count);
    }
    else{
        req.session.count=1;
        res.send("You Visted This Page for First Time");
    }
})