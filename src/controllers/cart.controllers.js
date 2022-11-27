import { cartCollection, stockCollection } from "../database/db.js";
import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import { ObjectId } from "mongodb";

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

export async function DeleteItem(req, res) {
  const { id } = req.params;
  try {
    await cartCollection.deleteOne({ _id: ObjectId(id) });
    res.send(id);
  } catch (err) {
    res.send(err);
  }
}
