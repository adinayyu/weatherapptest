/*let http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{
'Content-type':'text/html'});
res.end("Hello from my node server");
    }).listen(8020);*/

const http=require('http');
const hostname='127.0.0.1';
const port=3000;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    res.end("hello from StarWars");
});
server.listen(port,hostname,()=>{
    console.log('Server is running at http://${hostname}:${port}/')
})