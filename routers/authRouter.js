
const router = require('express').Router()

// Import Controller
const { registerNewUser } = require('../controllers/authController')


router.post('/register', registerNewUser)

module.exports = router