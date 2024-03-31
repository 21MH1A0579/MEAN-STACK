const express=require('express');
let app=express();
let router=express.Router();
router.get('/students',(req,res)=>{
    res.send("This is from get method of Students");
});
router.post('/students',(req,res)=>{
    res.send("this is from post method of students");
});
router.get('/students/cse',(req,res)=>{
    res.send("This is from students cse get method");
})
module.exports=router;