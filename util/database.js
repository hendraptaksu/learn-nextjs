import { MongoClient } from "mongodb";

// Connection URL
// const url = "mongodb://localhost:27017";
const dbUser = process.env.db_username;
const dbPass = process.env.db_password;
const dbCluster = process.env.db_clustername;
const dbName = process.env.db_name;

const url = `mongodb+srv://${dbUser}:${dbPass}@${dbCluster}.90yhs10.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(url);

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
