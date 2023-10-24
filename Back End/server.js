const express = require('express')
const app = express();
const mongoose = require('mongoose')
const Cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const {
  getTodos,
  createTodos,
  updateTodos,
  deleteTodos

} = require('./controllers/todoController')

//Connections
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log("connected to mongo") }
  )

  app.use(express.json())
  app.use(Cors())

app.listen(process.env.PORT, () => {
    console.log("running")
})
.catch((er) => {
  console.log(err)
})

//Endpoints


//Get list
app.get('/todos', getTodos)

//Create todo
app.post('/todos', createTodos)

//Update todo
app.put('/todos/:id', updateTodos)

//Delete tdo
app.delete('/todos/id', deleteTodos)