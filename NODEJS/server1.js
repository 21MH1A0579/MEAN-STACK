const http=require('http');
const { text } = require('stream/consumers');
const server=http.createServer((req,res)=>{
    const data={name:"prasad",city:"rjy"};
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify(data));

});
server.listen(3000,()=>{
    console.log("server is running at 3000");
});

