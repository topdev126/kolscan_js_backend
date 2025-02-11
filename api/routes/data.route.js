import express from "express";
import { getLeader } from "../controllers/data.controller.js";
const router = express.Router();

router.get("/getLeader", getLeader);

export default router;
