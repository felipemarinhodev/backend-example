import express from "express";
import { healthController } from "./health.js";

const route = express.Router();

route.get("/health", healthController.healthCheck);

export default route;
