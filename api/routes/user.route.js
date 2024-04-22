import express from 'express';
import { testRouter, updateUser } from '../controller/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', testRouter)
router.put('/update/:userId', verifyToken, updateUser)

export default router;