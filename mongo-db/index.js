const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';  ///static to connect mongoDB
const dbname = "users";

const client = new MongoClient(url);  //to set the connection

const connect = async ()=>{     //function to connect database 
    await client.connect();  //this command will connect
    const db = client.db(dbname);  //databse connect to 
    const collection = db.collection('products');  //create collection and connect to database
    return collection;
}


//function to Insert data

const insertData = async ()=>{
    const collection = await connect();  //store collection in 'collection'
    const data = {
        "name": "sangeeta",
        "age": 30,
        "designation": 'software-Developer'
    }
    const response = await collection.insertOne(data);  //insert data into collection and response store in 'response'

    console.log(response);
    
}
//insertData();

//Multiple data insert

const multipleData = async ()=>{
    const collection = await connect();
    const data =[
        {
            "name": "kajal",
            "age": 30,
            "designation": 'Clerk'
        },
        {
            "name": "sourav",
            "age": 32,
            "designation": 'Software-Engineer'
        }
    ]

    const response = await collection.insertMany(data);
    console.log(response);
}

// multipleData();


// Read Data

const readData = async ()=>{
    const collection = await connect();
    const response = await collection.find().toArray();  //data return in array format.

    console.log(response);
}

// readData();

//Search DATA from database-if there will be more than one data exists with same condition then it will return first matched data.

const searchData = async ()=>{
    const collection = await connect();
    const response = await collection.find({'name':'sourav'}).toArray();
    console.log(response);
}
// searchData();


//UPDATE DATA in database

const updateData = async ()=>{
    const collection = await connect();
    //it will take two object first for condition and other for updated data. if there will be more than one data with same condition then its gonna update first matched data.
    const response = await collection.updateOne(   
        { 'name': "sourav"},
        { $set: {'age':45, 'contact': 6047825092}}
    )

    console.log(response);
}
// updateData();


//DELETE DATA from database
const deleteData = async ()=>{
    const collection = await connect();
    //deleteMany will delete all the data matched with condition.
    const response = await collection.deleteMany({ 'name': "sourav"})

    console.log(response);
}

// deleteData();