const express=require('express');
let app=express();
let router=express.Router();
router.get('/staff',(req,res)=>{
    res.send("This is from get method of Staff");
});
router.post('/staff',(req,res)=>{
    res.send("this is from post method of Staff");
})
router.delete('/staff/name',(req,res)=>{
    res.send("This is from delete method of Staff name");
});
module.exports=router;