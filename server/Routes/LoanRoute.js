import express from 'express'
import { addLoan, getAllLoans } from '../Controllers/LoanController.js';

const router = express.Router();

router.post('/addLoan',addLoan);
router.get('/getAllLoans',getAllLoans);

export default router;