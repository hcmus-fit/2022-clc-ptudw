const { MongoClient } = require("mongodb");
require('dotenv').config();
const uri = process.env.DATABASE_URI;
const client = new MongoClient(uri);

exports.connect = () => {
  return client.connect();
}

exports.db = () => {
  return client.db();
}
// async function run() {
//   try {
//     await client.connect();
//     console.log('Connected correctly to server');
//     const database = client.db('organi');
//     const products = await database.collection('products').find().toArray();
//     console.log(products);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
//
// run();
