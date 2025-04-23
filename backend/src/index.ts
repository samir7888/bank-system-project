

const express = require('express');
const cors = require('cors');
import atmRouter from './routes/atm';
import customerRouter from './routes/customer/customerAuth';
const app = express();
app.use(cors())
app.use(express.json())

app.use('/atm',atmRouter);
app.use('/user',customerRouter)

app.listen(3000,()=>{
    console.log("sever created")
})
