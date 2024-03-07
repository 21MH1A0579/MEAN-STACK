var fs=require('fs');
// fs.readFile('cse1.txt',function(err,data){
//     if(err){
//         console.log("error");
//     }
//     else{
//         console.log(data.toString());
//     }
// })
// fs.writeFile('cse2.txt','Durga prasad from CSE',function(err,data){
//     if(err)
//     {
//         console.log("fail");
//     }
//     else{
//         console.log("success");
//     }
// });
// fs.appendFile('cse1.txt','acoe meanstack lab',function(err){
//     if(err)
//     {
//         console.log("fail")
//     }
//     else{
//         console.log("data appended successfully");
//     }
// })
// fs.unlink('cse1.txt',function(err){
//     if(err)
//     {
//         console.log("not deleted");
//     }
//     else{
//         console.log("deleted");
//     }
// })
fs.mkdir('lab2',function(err){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Directory created");
    }
})