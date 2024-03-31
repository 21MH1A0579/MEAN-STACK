const express=require('express');
const morgan=require('morgan');
const app=express();
app.listen(3000,()=>{
    console.log("server running successfully");
})
app.use(morgan('dev'));
app.get('/',(req,res)=>{
    res.send("<h1>welcome to morgan</h1>");
});
