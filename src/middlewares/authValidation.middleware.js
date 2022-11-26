import userSchema from "../models/users.model.js";
import { usersCollection, sessionsCollection } from "../database/db.js";
import bcrypt from "bcrypt";

export function userValidation(req, res, next) {
  const user = req.body;

  const { error } = userSchema.validate(user, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }

  res.locals.user = user;

  next();
}

export async function signInValidation(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await usersCollection.findOne({ email });
    res.locals.user = user;
    if (!user) {
      return res.status(401).send("Usuário ou senha incorretos");
    }
    const passwordOk = bcrypt.compareSync(password, user.password);
    if (!passwordOk) {
      return res.status(401).send("Usuário ou senha incorretos");
    }
    console.log("user no midd", user);
    res.locals = user;
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

  next();
}

export async function authValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const session = await sessionsCollection.findOne({ token });
    if (!session) {
      return res.sendStatus(401);
    }
    const user = await usersCollection.findOne({ _id: session?.userId });
    if (!user) {
      return res.sendStatus(401);
    }

    res.locals.user = user;
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

  next();
}