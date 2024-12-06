//FS Module is per installed module-used to manage the file

const fs = require('fs');

console.log(__dirname);  //return the path of parent directory
console.log(__filename); //return the path of current file.


//1.CREATE FILE

//fs.writeFileSync('path', 'content')-- syntax for create file

fs.writeFileSync('./public/hello.txt', 'hello world'); //it will create file inside public folder whose with content given. If content is longer then we can store into a variable and pass the variable  in place of content.

// 2. READ FILE (fs.readFile("path", 'language code', 'function'))


// it will show error if there is any error otherwise return data.
fs.readFile('./public/hello.txt', 'utf-8', (error, data)=>{
    console.log(data);
} )

//3. APPEND FILE(fs.appendFileSync('path', 'content'))
 //it will update the content to the end of the file
fs.appendFileSync('./public/hello.txt', ' how are you all?');


//4. CHECK File -- used to check the file if exists or not (fs.existsSync('completefilepath'))

var isExist = fs.existsSync(`${__dirname}/public/hello.txt`);
console.log(isExist);



//5. DELETE FILE( fs.unlinkSync('filepath'))

//it will delete the file 
fs.unlinkSync('./public/hi.txt');
