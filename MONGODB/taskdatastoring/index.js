const express=require('express');
const fs=require('fs');
const studentsdata=JSON.parse(fs.readFileSync('./userdata.json'));
var app=express();
app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());
app.listen(4000,()=>{
    console.log("Server Running Successfully");
});

app.get('/form',(req,res)=>{
    res.sendFile(__dirname+'/public/form.html');
});
app.get('/userdata',(req,res)=>{
    res.send(studentsdata);
})
app.post('/postuserdata',(req,res)=>{
    let student=studentsdata.find(el=>{ return ((el.rollnumber===req.body.urollnumber) || (el.name===req.body.uname)|| (el.phone===req.body.uphone) || (el.email===req.body.uemail))});
    if(!student)
    {
    const newstudent={
        "name":req.body.uname,
        "rollnumber":req.body.urollnumber,
        "branch":req.body.ubranch,
        "phone":req.body.uphone,
        "email":req.body.uemail
    };
    studentsdata.push(newstudent);
    fs.writeFile('./userdata.json',JSON.stringify(studentsdata),(err)=>{
        res.send("data inserted");
    });
    }else{
        res.send("Duplicate name/rollnumber/phonenumber/email is given");

}
})