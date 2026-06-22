import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

dotenv.config()
const app=express();
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
  credentials: true,
}))

app.get('/',(req,res)=>{
    res.json({ message: 'API working ' });
})

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

  app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ success: false, message });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});