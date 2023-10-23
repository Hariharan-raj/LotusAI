import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

client = new MongoClient(uri);
clientPromise = client.connect();

export default clientPromise;
