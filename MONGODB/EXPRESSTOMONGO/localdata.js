const express=require('express');
const mongoose=require('mongoose');
let b=mongoose.connect('mongodb://localhost:27017/21mh1a0579');
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
let cseschema=new mongoose.Schema({
    _id:Number,
    name:String,
    branch:String,
    result:String
    
},{versionKey:false})
let csemodel=new mongoose.model('21MH1A0579',cseschema,'21MH1A0579');
app.post('/21mh1a0579/postdata',async(req,res)=>{
    const data={
        _id:req.body._id,
        name:req.body.name,
        branch:req.body.branch,
        result:req.body.result,
    };
    const m=new csemodel(data);
    await m.save().then((info)=>{
        res.send("Inserted Successfully");
    })
})
app.get('/21mh1a0579/viewdata',(req,res)=>{
    csemodel.find().then((data)=>{
        res.json(data);
    })
})
app.get('/21mh1a0579/viewdatabyid/:id',(req,res)=>{
    const id=req.params.id*1;
    csemodel.find({_id:id}).then((data)=>{
        if(data[0]){
        res.json(data);
        }
        else{
            res.send("NO data Found With ID:"+id);
        }
    })
})

app.get('/21mh1a0579/viewdatabyresult/:result',(req,res)=>{
    const result=req.params.result;
    csemodel.find({result:result}).then((data)=>{
        if(data[0]){
        res.json(data);
        }
        else{
            res.send("NO data Found With result:"+result)
        }
    })
})
