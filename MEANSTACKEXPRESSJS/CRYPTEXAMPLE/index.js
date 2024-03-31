const express=require('express');
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const app=express();
app.listen(3000,()=>{
    console.log("server running successfully ")
})
app.use(express.json());
app.use(express.urlencoded())
let b=mongoose.connect('mongodb://127.0.0.1:27017/crypt');
b.then((info)=>{
    console.log("connection successfull")
})
b.catch((info)=>{
    console.log("connection Failed");
})
let cseschema=new mongoose.Schema({
    user:String,
    password:String
})
let csemodel=new mongoose.model('csedata',cseschema,'cryptlogin');
app.post('/login',async(req,res)=>{
    const {user,password}=req.body;
    //ENCRYPTION
    const hashedpassword=await bcrypt.hash(password,10);
    const newuser=new csemodel({
        user,
        password:hashedpassword
    })
    await newuser.save();
    res.status(200).send("User Registred SuccessFully!!!");
    
})
app.post('/check',async(req,res)=>{
    const {user,password}=req.body;
    const user1=await csemodel.findOne({user:user});
    if(!user1)
    {
        res.status(400).send(" USER NOT FOUND");
    }
    //DECRYPTION
   const passwordmatch=await bcrypt.compare(password,user1.password)
   if(passwordmatch){
    res.status(200).send("LOGIN SUCCESSFULL")
   }
   else{
    res.status(400).send("INVALID PASSWORD");
   }
})