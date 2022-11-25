import Router from "express";
import { signIn, signUp } from "../controllers/auth.controllers.js";
import {
  userValidation,
  signInValidation,
} from "../middlewares/authValidation.middleware.js";

const router = Router();

router.post("/signup", userValidation, signUp);
router.post("/signin", signInValidation, signIn);

export default router;
