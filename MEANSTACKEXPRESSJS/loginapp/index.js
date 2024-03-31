const express=require('express');
const fs=require('fs');
let data=JSON.parse(fs.readFileSync('./students.json'))
let app=express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("server is running sucessfully");
})
app.get('/cse',(req,res)=>{
    res.send("Welcome to ExpressJS");
});
app.get('/cse/studentsdata',(req,res)=>{
    res.json(data);
})
//Get by Id
app.get('/cse/studentsdata/getbyid/:id',(req,res)=>{
    const id=req.params.id*1;
    let student=data.find(el=>el.id===id);
    if(!student)
    {
        res.send("No student found with id:"+id);
    }
    res.json(student);
})
//posting data
app.post('/cse/studentsdata/addstudent',(req,res)=>{
    console.log(req.body);
    let newstudent=req.body;
    data.push(newstudent);
    fs.writeFile('./students.json',JSON.stringify(data),(success)=>{
        res.send("Inserted Successfully!!!");
    })
})
//delete 
app.delete('/cse/studentsdata/deletestudent/:id',(req,res)=>{
            const id=req.params.id*1;
            let student1=data.find(el=>el.id===id);
            if(!student1){
                res.status(404);
                res.send("no data found with id:"+id);
            }
            let index=data.indexOf(student1);
            data.splice(index,1);
            fs.writeFile('./students.json',JSON.stringify(data),(success)=>{
                res.send("Deleted SuccessFully");
            })
});

//patch
app.patch('/cse/studentsdata/updatestudent/:id',(req,res)=>{
    const id=req.params.id*1;
    let updatedstudent=data.find(el=>el.id===id);
    if(!updatedstudent)
    {
        res.send("No student data Found with id:"+id);
    }
    let index=data.indexOf(updatedstudent);
    Object.assign(updatedstudent,req.body);
    data[index]=updatedstudent;
    fs.writeFile('./students.json',JSON.stringify(data),(success)=>{
        res.send("Updated SuccessFully!!!");
    })

})