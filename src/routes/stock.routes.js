import Router from "express";
import {
  AddCart,
  DeleteItem,
  GetCart,
} from "../controllers/cart.controllers.js";
import { GetStock, Stockin } from "../controllers/stock.controllers.js";

const router = Router();

router.post("/Stockin", Stockin);
router.get("/Stockin", GetStock);
router.post("/cart", AddCart);
router.get("/cart", GetCart);
router.delete("/cart/:id", DeleteItem);
export default router;
