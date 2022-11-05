const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const databaseName = 'headmasterstudents';
const client = new MongoClient(url);

async function dbConnect2() {
    let result = await client.connect();
    db = result.db(databaseName);
    return db.collection('data2');
}

module.exports = dbConnect2;