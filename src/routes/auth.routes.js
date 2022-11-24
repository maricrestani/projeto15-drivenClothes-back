import Router from "express";
import { signIn, signUp } from "../controllers/auth.controllers.js";
import { GetStock, Stockin } from "../controllers/stock.controllers.js";
import {
  userValidation,
  signInValidation,
} from "../middlewares/authValidation.middleware.js";

const router = Router();

//A página stock.routes está dando erro então estou usando as rotas aqui por enquanto para não ficar muito travado no projeto.
router.post("/signup", userValidation, signUp);
router.post("/signin", signInValidation, signIn);
router.post("/Stockin", Stockin);
router.get("/Stockin", GetStock);

export default router;
