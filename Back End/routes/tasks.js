const {createTask, getTasks} = require('../controllers/task')

const router = require("express").Router();

router.post('/', createTask)
router.get('/all', getTasks)


module.exports = router