import Router from "express";
import { AddCart, GetCart } from "../controllers/cart.controllers.js";
import { GetStock, Stockin } from "../controllers/stock.controllers.js";

const router = Router();

router.post("/Stockin", Stockin);
router.get("/Stockin", GetStock);
router.post("/cart", AddCart);
router.get("/cart", GetCart);
export default router;
