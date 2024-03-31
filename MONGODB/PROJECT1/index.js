const express=require('express');
const mongoose=require('mongoose');
const fileupload=require('express-fileupload');
const pug=require('pug');
const fs=require('fs');
const app=express();
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(fileupload())
app.set('view engine','pug')
app.listen(3000,()=>{
    console.log("Server is running successfully")
})
let b=mongoose.connect('mongodb://localhost:27017/project');
b.then((info)=>{
    console.log("Connection Success");
})
b.catch((info)=>{
    console.log("Connection Failed");
})
let cseschema=new mongoose.Schema({
    user:String,
    pass:String
})
let marksschema=new mongoose.Schema({
    user:String,
    ml:String,
    mnst:String,
    cns:String,
    cd:String
})
let modelcse= new mongoose.model('csedata',cseschema,'logindata');
let modelmarks=new mongoose.model('marks', marksschema,'marks');
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})
app.get('/viewdata',async(req,res)=>{
    await modelmarks.findOne().then((data)=>{
        res.send(typeof(data.ml));
    })
})
app.post('/register',async(req,res)=>{
      var data={
        user:req.body.user,
        pass:req.body.pass
      }
      const m=new modelcse(data);
      await m.save().then((info)=>{
       res.sendFile(__dirname+'/public/login.html');
        let pic=req.files.file;
        uploadpath=__dirname+'/public/images/'+pic.name;
        pic.mv(uploadpath,err=>{
            if(err)
            {
                return res.send(err);
            }
            fs.rename(uploadpath,__dirname+'/public/images/'+req.body.user+'.jpg',(error)=>{
                console.log(error);
            });
        })
       
      })

})
app.post('/check',async(req,res)=>{
    const user=await modelcse.findOne({user:req.body.luser})
    if(user)
    {
        const result=req.body.lpass===user.pass;
        if(result)
        { 
            const mark=modelmarks.findOne({user:req.body.luser});
           if(mark)
           {
              mark.then((data)=>{
                if(!data)
                {
                    file='/images/'+req.body.luser+'.jpg';
                   res.render('sample1.pug',{'file':file,'name':req.body.luser})
                }
                else{
                file='/images/'+req.body.luser+'.jpg';
                res.render('sample.pug',{'file':file,'name':req.body.luser,'data':data})
                }
              })
           }
           else{
            res.send("NO MARKS DATA FOUND");
           }
        }
        else{
            res.sendFile(__dirname+'/public/login.html');
        }
    }
    else{
        res.sendFile(__dirname+'/public/login.html');
    }
})
