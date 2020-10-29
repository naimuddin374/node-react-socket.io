const router = require('express').Router()

// Import Controller
const { getAllUserList } = require('../controllers/userController')


router.get('/', getAllUserList)

module.exports = router