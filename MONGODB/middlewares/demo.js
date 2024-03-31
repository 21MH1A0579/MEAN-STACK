const express=require('express');
const app=express();
app.listen(3000,()=>{
    console.log("server running successfully!!!");
});
//creating user-defined middleware
const filter=(req,res,next)=>{
    if(req.body.uname==="cse" && req.body.pass==="acoe")
    {
        next();
    }
    else{
        res.send("Enter valid details");
    }
}
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/home.html');
});
app.use(filter);
app.post('/form_get',(req,res)=>{
    res.send("<h1>welcome to Express Module</h1>");
})