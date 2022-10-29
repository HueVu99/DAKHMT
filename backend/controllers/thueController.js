const asyncHandler = require('express-async-handler')

const Thue = require('../models/thueModel')



const getThueS = asyncHandler(async (req, res) => {
  const thue = await Thue.find()

  res.status(200).json(thue)
})

const setThue = asyncHandler(async (req, res) => {
  if (!req.body.MaNv ||!req.body.maThue|| !req.body.coquanThue|| !req.body.ngayDK || !req.body.maLuong || !req.body.soTienDong ) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const thue = await Thue.create({
    MaNv: req.body.MaNv,
    maThue:req.body.maThue,
    coquanThue:req.body.coquanThue,
    ngayDK: req.body.ngayDK,
    maLuong:req.body.maLuong,
    soTienDong:req.body.soTienDong,
   
  })

  res.status(200).json(thue)
})

const getThue = asyncHandler(async (req, res) => {
  const thue = await Thue.findById(req.params.id)
  res.status(200).json(thue)
})

const updatedThue = asyncHandler(async (req, res) => {
  const thue = await Thue.findById(req.params.id)
  if (!thue) {
    res.status(400)
    throw new Error('thue not found')
  }
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }
  const updatedThue = await Thue.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  if (!req.body.MaNv ||!req.body.maThue|| !req.body.coquanThue|| !req.body.ngayDK || !req.body.maLuong || !req.body.soTienDong ) {
    res.status(400)
    throw new Error('Please add a text field')
  }
   res.status(200).json(updatedThue)
})

const deleteThue = asyncHandler(async (req, res) => {
  const thue = await Thue.findByIdAndDelete(req.params.id)

  if (!thue) {
    res.status(400)
    throw new Error('thue not found')
  }
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }
  await thue.remove()
  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getThueS,
  setThue,
  getThue,
  updatedThue,
  deleteThue,
}
