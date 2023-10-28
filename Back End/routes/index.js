const router = require("express").Router();
const taskRoutes = require('./tasks')
const authRoutes = require('./auth')
const usersRoutes = require('./users')


router.use('/auth', authRoutes)
router.use('/tasks', taskRoutes)
router.use('/users', usersRoutes)


module.exports = router

