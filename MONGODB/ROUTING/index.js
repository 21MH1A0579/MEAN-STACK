const express=require('express');
let app=express();
app.listen(3000,()=>{
    console.log("server is running successfully");
})
let student=require('./routes/students.js');
let teacher=require('./routes/staff.js');
app.use('/stu',student);
app.use('/staf',teacher);