const express=require('express');
const mongoose=require('mongoose');
let b=mongoose.connect('mongodb+srv://chalumuribrahmendra472:acoecse@cluster0.mng2ajj.mongodb.net/sample_mflix');
b.then((data)=>{
    console.log("connection successfull!!!!");
})
b.catch((err)=>{
    console.log("connection failed!!!");
})
const app=express();
app.listen(3000,()=>{
    console.log("server is running successfully ");
});
app.use(express.json());
const User = mongoose.model('User', mongoose.Schema({}), 'users');
app.get("/users/:name",(req,res)=>{
    const name=req.params.name;
    User.find({name:name}).then((data)=>{
        res.json(data);
    })
})