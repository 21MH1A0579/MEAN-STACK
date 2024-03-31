const express=require('express');
const app=express();
app.listen(4000,()=>{
    console.log("server running successfully");
});
const cse1=(req,res)=>{
    console.log("hai");
};
app.use(cse1);
app.get('/',(req,res)=>{
    res.send("Welcome to Acoe");
});
app.get('/cse',(req,res)=>{
    res.send("Welcome to CSE");
})
