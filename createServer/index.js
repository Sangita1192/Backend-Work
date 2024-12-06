const http = require('http');

console.log(http);
//CreateServer method used to create the server and .listen(4204) use to listen the server
// server should be 4-digit code.
http.createServer((req,res)=>{
    console.log(req.url); 
     //drawback of http, it doesn't refine the query.
     console.log(req.method);
    res.end('hello');  //whenever this url hit it shows this output
}).listen(5000);


//other drawback- even if you use post method it will show output.
//To solve these problem we use express.js