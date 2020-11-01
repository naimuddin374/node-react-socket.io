const router = require('express').Router()

// Import Controller
const {
    getAllReservation,
    getAllQrCodeReservation,
    getAllManualReservation,
    storeQrCodeReservation,
    storeManualReservation,
    deleteReservation
} = require('../controllers/reservationController')


router.get('/', getAllReservation)
router.get('/qr-code', getAllQrCodeReservation)
router.get('/manual', getAllManualReservation)
router.post('/qr-code', storeQrCodeReservation)
router.post('/manual', storeManualReservation)
router.delete('/:id', deleteReservation)

module.exports = router