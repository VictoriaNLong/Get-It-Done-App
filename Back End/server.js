const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const allRoutes = require("./routes/index");

dotenv.config();

//Connections
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log('MongoDB Connected');
  } catch (err) {
    console.log(err);
  }
};

//middelware
app.use(express.json());
const corsOptions ={
  origin: 'https://get-it-done-app-client.onrender.com',
  credentials:true
}
app.use(Cors(corsOptions));
app.use(morgan("tiny"));
app.use(cookieParser());

app.listen(process.env.PORT, () => {
  connectDB()
  console.log(`running`);
});

//Endpoints
app.use("/api", allRoutes);
