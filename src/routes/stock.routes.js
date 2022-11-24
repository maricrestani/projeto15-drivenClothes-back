import Router from "express";
import { Stockin } from "../controllers/stock.controllers.js";

const router = Router();

router.post("/Stockin", Stockin);
