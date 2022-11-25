import { cartCollection, stockCollection } from "../database/db.js";
import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";

export async function AddCart(req, res) {
  const { img, description, serial, value } = req.body;
  try {
    await cartCollection.insertOne({ img, description, serial, value });

    res.send("Lançamento efetuado");
  } catch (error) {
    console.log(error);
  }
}

export async function GetCart(req, res) {
  try {
    const allCart = await cartCollection.find().toArray();

    res.send(allCart);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
