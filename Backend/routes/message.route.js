import express from 'express';
import { getMesssage, sendMessage } from '../controller/message.controller.js';
import secureRoute from '../middleware/secureRoute.js';

const router=express.Router();
router.post("/send/:id",secureRoute,sendMessage);
router.get("/get/:id",secureRoute,getMesssage);


export default router;