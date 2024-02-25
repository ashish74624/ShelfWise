import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import BookRoutes from './Routes/BookRoute.js'
import StudentRoutes from './Routes/StudentRouter.js'
import PublisherRoutes from './Routes/PublisherRoute.js'
import LoanRoutes from './Routes/LoanRoute.js'
import cors from 'cors'

const app = express();
app.use(express.json());
dotenv.config();

app.use(cors({
    origin:'*',
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))


app.use('/book',BookRoutes);
app.use('/student',StudentRoutes);
app.use('/pub',PublisherRoutes);
app.use('/loan',LoanRoutes);

mongoose.connect(process.env.URL)
.then(()=>{console.log('Connected to MongoDB')})
.catch((err)=>{console.log('Failed To Connect to mongoDB ',err)});

app.listen(process.env.PORT,()=>{
    console.log(`Server started on port: ${process.env.PORT}`)
})