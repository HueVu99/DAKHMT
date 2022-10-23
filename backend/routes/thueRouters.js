const express = require('express')
const router = express.Router()
const {
  getThueS,
  setThue,
  getThue,
  updatedThue,
  deleteThue,
} = require('../controllers/thueController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect,getThueS).post(protect, setThue)
router.route('/:id').get(protect,getThue).delete(protect, deleteThue).put(protect, updatedThue)

module.exports = router
