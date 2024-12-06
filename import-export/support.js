const obj ={
    name: 'sangeeta',
    age: 32,
    occupation: 'software developer'
};

const obj2 ={
    name:"sourav",
    age:33,
    occupation: 'power engineer'
};


//export default (single object, we can export only single object)

module.exports = obj;

//if we have multiple object to export, we can hold all the object into single object and then export.


module.exports = {
    obj,
    obj2
}


//DEFAULT EXPORTS- when we'll import it object name becomes key and it will show all data.
exports.data = {
    name: "kajal",
    age:27,
    occupation: 'student'
};
exports.hello = {
    name: "hello",
    age:25,
    occupation: 'student'
};