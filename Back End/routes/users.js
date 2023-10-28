const {getUserInfo, updateUser} = require('../controllers/user')

const router = require("express").Router();

router.get('/me', getUserInfo)
router.put('/me', updateUser)

module.exports = router