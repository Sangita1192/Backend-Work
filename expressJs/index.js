const express = require('express');

const app = express(); //Create server-initialize the server
//In express we can't define direct controller as we did in http, here first we need to provide
//first method then provide route then controller

app.use(express.json());  //It will work as middleware whatever data comes in json, it convert into object

app.get('/:name', (req,res)=>{   //:name param is used when we want to send data after/in url (param is compulsory)
    //'/:name?' adding question mark param become optional
    res.send('hello everyone!!');
    console.log(req.query);   //it will return the data in object form
    console.log(req.params);
});

app.get('/contact', (req,res)=>{
    res.send('contact page');
    
});
//route and method can't be same in express but route can be same if method are different.
app.post('/',(req,res)=>{
    console.log('post method');
    console.log(req.body);
});



//listen 5000 port 
app.listen(5000);
