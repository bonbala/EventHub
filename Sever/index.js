const express = require('express')
const cors = require('cors')
const authRouter = require('./src/routers/authRouter');
const connectDB = require('./src/configs/connectDB');
const errorMiddleware = require('./src/middlewares/errorMiddleware');
const app = express()

app.use(cors());
app.use(express.json());

const PORT = 3001

app.use('/auth', authRouter);

connectDB();

app.use(errorMiddleware)

app.listen(PORT,(err)=>{
    if (err) {
        console.log(err);
        return;
    }

    console.log(`Sever starting at htpp://localhost:${PORT}`);
    
});
