import Router from "express";
import { CloseOrder} from "../controllers/checkout.controllers.js";

const router = Router();

//get dos produtos do cartCollection =  const { img, description, serial, value } = req.body;
//post dos produtos selecionado + adress + card na checkoutCollection//
router.post("/checkout", CloseOrder)

export default router;