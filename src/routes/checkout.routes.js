import Router from "express";
import { CloseOrder} from "../controllers/checkout.controller.js";

const router = Router();

router.post("/checkout", CloseOrder);

export default router;
