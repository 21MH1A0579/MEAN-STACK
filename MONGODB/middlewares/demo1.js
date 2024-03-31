const express=require('express');
const helmet=require('helmet');
const app=express();
app.listen(4000,()=>{
    console.log("server running successfully!!!");
});
app.use(helmet());
app.get('/cse',(req,res)=>{
    res.send("welcome to Helmet");
});
