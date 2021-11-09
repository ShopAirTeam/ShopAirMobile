require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");

const authRouter = require('./routes/auth')

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@shopair.xggdy.mongodb.net/ShopAir?retryWrites=true&w=majority`);
    console.log("MongoDB connected!");
  } catch (error) {
    console.log(error.message); 
    process.exit(1);
  }
};
connectDB();
const app = express();
// app.get('/', (req, res) => res.send('Hello world'))
app.use(express.json())
app.use('/api/auth', authRouter)

app.listen(`${process.env.PORT}`, () => console.log(`Server started with port ${process.env.PORT}`));
