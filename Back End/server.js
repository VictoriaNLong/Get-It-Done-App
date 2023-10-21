const express = require('express')
const app = express();
const mongoose = require('mongoose')
const Cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log("connected to mongo") }
  )

  app.use(express.json())


app.listen(process.env.PORT, () => {
    console.log("running")
})
