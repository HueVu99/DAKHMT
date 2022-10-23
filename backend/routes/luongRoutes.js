const express = require('express')
const router = express.Router()
const {
  getLuongs,
  setLuong,
  updateLuong,
  deleteLuong,
  getLuong,
} = require('../controllers/luongController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getLuongs).post(protect, setLuong)
router.route('/:id').get(protect,getLuong).delete(protect, deleteLuong).put(protect, updateLuong)

module.exports = router
