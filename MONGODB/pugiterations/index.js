const express=require('express');
const pug=require('pug');
const app=express();
app.listen(3000,()=>{
    console.log("server running successfully");
});
app.set('view engine','pug');
app.get('/subjects',(req,res)=>{
    const subjects=["PRASAD","DURGA","YDP","YDPRASAD","YDURGAPRASAD"];
    res.render('sample.pug',{'sub':subjects});
})