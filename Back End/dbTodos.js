const mongoose = require('mongoose')

const todoSchema = mongoose.SchemaType(
    {
        text: {
            type: String,
            required: true
        },
        completed: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('todos', todoSchema)