const express=require('express');
const fileupload=require('express-fileupload');
const app=express();
app.use(express.json())
app.use(fileupload())
app.listen(3000,()=>{
    console.log("server running successfully");
})
app.post('/upload',(req,res)=>{
    let csefile=req.files.file;
    uploadpath=__dirname+'/public/'+csefile.name;
    csefile.mv(uploadpath,err=>{
        if(err)
        {
            res.send("Error in Uploading")
        }
        else{
            res.send("Uploaded Successfully")
        }
    })
})
