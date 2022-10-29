const asyncHandler = require('express-async-handler')

const Luong = require('../models/luongModel')



const getLuongs = asyncHandler(async (req, res) => {
  const luong = await Luong.find()

  res.status(200).json(luong)
})

const setLuong = asyncHandler(async (req, res) => {
  if (!req.body.MaNv ||!req.body.hovaTen|| !req.body.maCM|| !req.body.luongCB || !req.body.phuCap || !req.body.ngayNhap || !req.body.luongCBM|| !req.body.ngaySua ) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const luong = await Luong.create({
    MaNv: req.body.MaNv,
    hovaTen:req.body.hovaTen,
    maCM:req.body. maCM,
    luongCB: req.body.luongCB,
    phuCap:req.body.phuCap,
    ngayNhap:req.body.ngayNhap,
    luongCBM:req.body.luongCBM,
    ngaySua: req.body.ngaySua,
  
  })

  res.status(200).json(luong)
})

const getLuong = asyncHandler(async (req, res) => {
  const luong = await Luong.findById(req.params.id)
  res.status(200).json(luong)
})

const updateLuong = asyncHandler(async (req, res) => {
    const luong = await Luong.findById(req.params.id)
    if (!req.body.MaNv ||!req.body.hovaTen|| !req.body.maCM|| !req.body.luongCB || !req.body.phuCap || !req.body.ngayNhap || !req.body.luongCBM|| !req.body.ngaySua ) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  if (!luong) {
    res.status(400)
    throw new Error(' not found')
  }
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }
  const updateLuong = await Luong.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
   res.status(200).json(updateLuong)
})

const deleteLuong = asyncHandler(async (req, res) => {
  const luong = await Luong.findById(req.params.id)
  if (!luong) {
    res.status(400)
    throw new Error(' not found')
  }
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }
  await luong.remove()
  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getLuongs,
  setLuong,
  getLuong,
  updateLuong,
  deleteLuong,
}
