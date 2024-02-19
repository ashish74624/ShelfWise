import express from "express";
import { addPublisher } from "../Controllers/PublisherController.js";


const router = express.Router();

router.post('/addPublisher',addPublisher);

export default router;