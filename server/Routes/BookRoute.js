import express from 'express'
import { addBook } from '../Controllers/BookController.js';

const router = express.Router();

router.post('/addBook',addBook);

export default router;