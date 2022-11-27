import { usersCollection, sessionsCollection } from "../database/db.js";
import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";

export async function signUp(req, res) {
  const { name, email, password } = res.locals.user;
  const user = res.locals.user;
  const hashPassword = bcrypt.hashSync(password, 10);
  const token = uuidV4();

  const emailAlredyExists = await usersCollection.findOne({ email: email });
  if (emailAlredyExists) {
    res.status(409).send("Email já cadastrado");
    return;
  }

  try {
    await sessionsCollection.insertOne({ token, userId: user._id });
    await usersCollection.insertOne({ name, email, password: hashPassword });
    res.send({ token, email }).status(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function signIn(req, res) {
  const user = res.locals.user;
  const email = user.email
  const token = uuidV4();

  try {
    await sessionsCollection.insertOne({ token, userId: user._id });
    res.send({ token, email }).status(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
