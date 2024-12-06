// //express provide route and server . Mainly express used to create route.

// const express = require('express');   //import

// const app = express();  //initiate express

// //create route
// // app.get('/register', (req,res)=>{
// //     res.send('welcome to api');
// // });


// //middleWare- act as middleware between route and server

// //m1- is middle ware here, it has its own req, res and callback(next), it acts as middleware, we can apply conditions to check if everything is ok then go to controller & return final response, otherwiser response send through middleware
// const m1 = (req, res, next)=>{
//     console.log('hellon middle');
//     // res.send('middleware response');
//     next();
// }


// //middleware can be multiple

// const m2 = (req, res, next)=>{
//     console.log('hellon middle 2');
//     // res.send('middleware response');
//     next();
// }
// app.get('/register', m1, m2, (req,res)=>{
//     res.send('welcome to api');
// });




// app.listen(3946, ()=>{
//     console.log('server is running');
// }); //add call back function just to check server is running. it is optional



const express = require('express');
const key = 123456;

const app = express();

const middle1 = (req, res, next)=>{

    //data always has to be send in json/object form 
    if(!req.params.key) return res.status(400).json({message: "key is not find"}); 

    if(req.params.key != key) return res.status(401).json({message: "key is not valid"});

    next();
}

app.get('/form/:key?', middle1, (req, res)=>{

    res.send('welcome to website');
});

app.listen(3000, ()=>{
    console.log('server is running');
})