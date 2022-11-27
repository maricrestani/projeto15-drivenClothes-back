import Router from "express";

import { GetStock, Stockin } from "../controllers/stock.controllers.js";

const router = Router();

router.post("/Stockin", Stockin);
router.get("/Stockin", GetStock);

export default router;
