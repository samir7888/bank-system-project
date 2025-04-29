import express from 'express';
import cors from 'cors'; // 👈 correct way to import
import cookieParser from "cookie-parser";

import atmRoutes from './routes/atm.routes';
import authRoutes from './routes/auth.routes';
import transferRoutes from './routes/transfer.routes';


const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true })); // 👈 add this line to allow CORS
app.use(cookieParser()) // 👈 add this line to use cookies
app.use(express.json())



app.use('/atm', atmRoutes);
app.use('/auth', authRoutes);
app.use('/transfer', transferRoutes);


export default app;