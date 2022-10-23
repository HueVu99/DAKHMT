const express = require('express')
const router = express.Router()
const {
  getNhanViens,
  setNhanVien,
  getNhanVien,
  updateNhanVien,
  deleteNhanVien,
} = require('../controllers/nhanVienCtroller')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getNhanViens).post(protect, setNhanVien)
router.route('/:id').get(protect,getNhanVien).delete(protect, deleteNhanVien).put(protect, updateNhanVien)

module.exports = router
