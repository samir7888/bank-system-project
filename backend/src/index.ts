

const express = require('express');
const cors = require('cors');
import atmRouter from './routes/atm';
import customerRouter from './routes/customer/customerAuth';
import moneyTransferRouter from './routes/customer/moneyTransfer';
const app = express();
app.use(cors())
app.use(express.json())

app.use('/',customerRouter)
app.use('/atm',atmRouter);
app.use('/user',moneyTransferRouter)

app.listen(3000,()=>{
    console.log("sever created")
})
