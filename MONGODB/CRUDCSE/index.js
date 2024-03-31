const express=require('express');
const mongoose=require('mongoose');
const pug=require('pug');
const app=express();
app.set('view engine','pug')
app.use(express.json());
app.listen(3000,()=>{
    console.log("server running successfully!!!");
})
let b=mongoose.connect('mongodb+srv://chalumuribrahmendra472:acoecse@cluster0.mng2ajj.mongodb.net/testdb');
b.then(()=>{
    console.log("connection Success");
})
b.catch(()=>{
    console.log("connection Failed");
})
let cseschema=new mongoose.Schema({
    _id:Number,
    name:String,
    depart:String,
    email:String,
    percentage:Number
})
let model=new mongoose.model('csedata',cseschema,'percentagedata');
app.post('/post',async (req,res)=>{
    var data={
        _id:req.body._id,
        name:req.body.name,
        depart:req.body.depart,
        email:req.body.email,
        percentage:req.body.percentage
    }
    const m=new model(data);
    await m.save().then((data)=>{
        res.send("data Inserted Successfully");
    })
})
app.get('/viewdata',(req,res)=>{
    model.find().then((data)=>{
        res.json(data);
    })
})
app.get('/viewdata/byid/:id',(req,res)=>{
    let i=req.params.id*1;
    model.find({_id:i}).then((data)=>{
        res.json(data);
    })
})
app.patch('/updatedata/byid/:id',(req,res)=>{
    model.findByIdAndUpdate(req.params.id,{$set:req.body}).then((info)=>{
        res.send("Updated Successfully");
    })
})
app.delete('/deletedata/byid/:id',async (req,res)=>{
    let b=req.params.id*1;
    model.findByIdAndDelete(b).then((info)=>{
        res.send("Deleted Successfully");
    })
})
//LIMITING 
app.get('/viewdata/limit/:num',(req,res)=>{
    let num=req.params.num*1;
    model.find().limit(num).then((data)=>{
        res.json(data);
    })
})
// SORTING OF DATA
app.get('/viewdata/sort',(req,res)=>{
    model.find().sort({percentage:-1}).limit(3).then((data)=>{
        res.json(data);
    })
})
app.get('/html/data',(req,res)=>{
    let b=model.find();
    b.then((data)=>{
        res.render('sample.pug',{data})
    })
})
app.get('/html/sort',(req,res)=>{
    let b=model.find().sort({percentage:1});
    b.then((data)=>{
        res.render('sample.pug',{data})
    })
})
app.get('/html/sort/:num',(req,res)=>{
    let num=req.params.num*1;
    let b=model.find().sort({percentage:1}).limit(num);
    b.then((data)=>{
        res.render('sample.pug',{data})
    })
})