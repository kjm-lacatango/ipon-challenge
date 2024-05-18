import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
const app = express();
import AuthRouter from './routes/auth.js'

app.use(express.json());
app.use(cors());

app.use("/auth", AuthRouter);

app.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`));