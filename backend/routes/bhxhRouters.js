const express = require('express')
const router = express.Router()
const {
  getBHXHS,
  setBHXH,
  getBHXH,
  updatedBHXH,
  deleteBHXH,
} = require('../controllers/bhxhController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect,getBHXHS).post(protect, setBHXH)
router.route('/:id').get(protect,getBHXH).delete(protect, deleteBHXH).put(protect, updatedBHXH)

module.exports = router
