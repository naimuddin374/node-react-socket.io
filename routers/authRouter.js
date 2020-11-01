
const router = require('express').Router()

// Import Controller
const {
    registerNewUser,
    userLogin
} = require('../controllers/authController')


router.post('/register', registerNewUser)
router.post('/login', userLogin)

module.exports = router