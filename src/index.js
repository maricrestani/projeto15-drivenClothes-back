import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import authroutes from "./routes/auth.routes.js";
import stockroutes from "./routes/stock.routes.js";
import checkoutroutes from "./routes/checkout.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(authroutes, stockroutes, checkoutroutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server runnin in port: ${process.env.PORT}`);
});
