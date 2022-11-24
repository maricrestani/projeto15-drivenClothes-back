import { stockCollection } from "../database/db.js";
import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";

export async function Stockin(req, res) {
  const { serial, number } = req.body;
  try {
    for (let i = 0; i < number; i++) {
      await stockCollection.insertOne({ serial });
    }
    res.send("Lançamento efetuado");
  } catch (error) {
    console.log(error);
  }
}

export async function GetStock(req, res) {
  try {
    const allStock = await stockCollection.find().toArray();

    res.send(allStock);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
