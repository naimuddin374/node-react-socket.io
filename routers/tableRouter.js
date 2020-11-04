const router = require('express').Router()

// Import Controller
const {
    getAllTableList,
    getAllEmptyTable,
    getAllBookedTable,
    storeNewTable,
    updateTable,
    deleteTable
} = require('../controllers/tableController')


router.get('/', getAllTableList)
router.get('/empty', getAllEmptyTable)
router.get('/book', getAllBookedTable)
router.post('/', storeNewTable)
router.put('/:id', updateTable)
router.delete('/:id', deleteTable)

module.exports = router