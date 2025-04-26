import express from 'express';

import atmRoutes from './routes/atm.routes';
import authRoutes from './routes/auth.routes';
import transferRoutes from './routes/transfer.routes';
import cookieParser from "cookie-parser";

const app = express();
const cors = require('cors');
app.use(cors())
app.use(cookieParser()) // 👈 add this line to use cookies
app.use(express.json())



app.use('/atm', atmRoutes);
app.use('/auth', authRoutes);
app.use('/transfer', transferRoutes);


export default app;