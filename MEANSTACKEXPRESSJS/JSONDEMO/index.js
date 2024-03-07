const express=require('express');
const fs=require('fs');
const { stderr } = require('process');
const students=JSON.parse(fs.readFileSync('./MEANSTACKEXPRESSJS/JSONDEMO/students.json'));
const app=express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("server is running at 3000");
})
// app.get('/',(req,res)=>{
//     res.send("welcome to Homepage");
// })
app.get('/cse/studentsdata',(req,res)=>{
    res.json(students);
});
app.get('/cse/studentsdata/:id',(req,res)=>{
   const id= req.params.id*1;
   let data=students.find(el=>el.id===id);
   if(!data)
   {
    res.status(404);
     res.send("No data with id");
   }
   res.json(data);
});
app.post('/cse/postdata',(req,res)=>{
    console.log(req.body);
    const newstudent=req.body;
    students.push(newstudent);
    fs.writeFile('./MEANSTACKEXPRESSJS/JSONDEMO/students.json',JSON.stringify(students),(err)=>{
        res.send("data inserted");
    });
})
app.patch('/cse/updatebyid/:id',(req,res)=>{
   const id=req.params.id*1;
   let stuupdate=students.find(ele=>ele.id===id);
   let index=students.indexOf(stuupdate);
   Object.assign(stuupdate,req.body);
   students[index]=stuupdate;
   fs.writeFile('./MEANSTACKEXPRESSJS/JSONDEMO/students.json',JSON.stringify(students),(err)=>{
    res.send("data Updated successfully");
})  
})
// app.delete('/cse/deletebyid/:id',(req,res)=>{
//     const id=req.params.id*1;
//     let studelete=students.find(ele=>ele.id===id);
//     let index=students.indexOf(studelete);
//     console.log(index);
//     students.splice(index,1);
//     res.send("deleted successfully");
 
//  })
app.delete('/cse/deletebyid/:id',(req,res)=>{
    const id=req.params.id*1;
    let studelete=students.find(ele=>ele.id===id);
    let index=students.indexOf(studelete);
    students.splice(index,1);
    fs.writeFile('./MEANSTACKEXPRESSJS/JSONDEMO/students.json',JSON.stringify(students),(err)=>{
     res.send("data deleted successfully");
 })  
 })

