const router = require("express").Router();
const taskRoutes = require('./tasks')


router.get('/hello', (req, res) => {
    res.json('hello world')
})

module.exports = router