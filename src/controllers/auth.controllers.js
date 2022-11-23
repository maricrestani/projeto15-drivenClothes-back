import { usersCollection, sessionsCollection } from "../database/db.js";
import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";

export async function signUp(req, res) {
  const { name, email, password } = res.locals.user;
  const hashPassword = bcrypt.hashSync(password, 10);

  const emailAlredyExists = await usersCollection.findOne({ email: email });
  if (emailAlredyExists) {
    res.status(409).send("Email já cadastrado");
    return;
  }

  try {
    await usersCollection.insertOne({ name, email, password: hashPassword });
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function signIn(res, req) {
  console.log("help", res.locals);
  const user = res.locals;
  console.log("user no controller", user);
  const token = uuidV4();

  try {
    await sessionsCollection.insertOne({ token, userId: user._id });
    res.send({ token });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
