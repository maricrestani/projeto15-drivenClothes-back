import Router from "express";
import { signUp } from "../controllers/auth.controllers.js";
import { userValidation } from "../middlewares/authValidation.middleware.js";

const router = Router();

router.post("/signup", userValidation, signUp);

export default router;
