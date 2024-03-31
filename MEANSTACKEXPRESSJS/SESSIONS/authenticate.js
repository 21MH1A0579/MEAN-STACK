const express=require('express')
const session=require('express-session')
const app=express()
app.listen(4000,()=>{
    console.log("Server Running Successfully");
})
app.use(session({
    secret:'meanstack',
    saveUninitialized:false,
}))
app.use((req,res,next)=>{
    res.set("Cache-Control",'no-store');
    next();
})
app.get('/login',(req,res)=>{
    const user=req.query.name;
    const pass=req.query.pass;
    if(user=="chaitanya" && pass=="chaithu")
    {
        req.session.loggedin=true;
        res.send("Login Success");
    }
    else{
        res.send("INVALID USERNAME AND PASSWORD");
    }
})
app.get('/next',(req,res)=>{
    if(req.session.loggedin){
      res.send("Main Content viewing by user!!!");
    }
    else{
        res.send("Unauthorised!!! Please Login To view this page")
    }
})
// app.get('/mst',(req,res)=>{
//     if(req.session.loggedin){
//       res.send("Main Content viewing by user in MST!!!");
//     }
//     else{
//         res.send("Unauthorised!!! Please Login To view this page")
//     }
// })
app.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
          if(err)
          {
            console.log(err)
          }
          else{
            res.send("Logged out SuccessFully");
          }
    })
})
