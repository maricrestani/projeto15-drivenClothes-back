import Router from "express";
import {
  AddCart,
  DeleteItem,
  GetCart,
} from "../controllers/cart.controllers.js";

const router = Router();

router.post("/cart", AddCart);
router.get("/cart", GetCart);
router.delete("/cart/:id", DeleteItem);
export default router;
