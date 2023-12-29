import { MongoClient } from "mongodb";

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "my-blog";

async function getDb() {
  try {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to DB");
    const db = client.db(dbName);
    return db;
  } catch (err) {
    console.log(err);
  }
}

export async function getCollection(name) {
  const db = await getDb();
  return db.collection(name);
}
