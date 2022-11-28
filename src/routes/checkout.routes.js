import Router from "express";
import { CloseOrder } from "../controllers/checkout.controller.js";
import { checkoutValidation } from "../middlewares/checkoutValidation.middleware.js";

const router = Router();

router.post("/checkout", checkoutValidation, CloseOrder);

export default router;
