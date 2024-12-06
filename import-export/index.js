//import obj 
const obj = require('./support'); //.support is the file path

console.log(obj);


//import multiple objects
const {obj, obj2} = require('./support');

console.log(obj);
console.log(obj2);


//import DEFAULT exports 

const file  = require('./support');
console.log(file);