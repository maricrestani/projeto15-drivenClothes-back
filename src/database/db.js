import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

try {
  await mongoClient.connect();
  console.log("MongoDB connected!");
} catch (err) {
  console.log(err);
}

const db = mongoClient.db("DrivenClothes");

export const usersCollection = db.collection("users");
export const sessionsCollection = db.collection("sessions");
export const stockCollection = db.collection("stock");
export const cartCollection = db.collection("cart");
export const checkoutCollection = db.collection("checkout")
