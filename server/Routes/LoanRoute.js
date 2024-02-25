import express from 'express'
import { addLoan } from '../Controllers/LoanController.js';

const router = express.Router();

router.post('/addLoan',addLoan);

export default router;