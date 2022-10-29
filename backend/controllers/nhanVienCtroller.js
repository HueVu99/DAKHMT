const asyncHandler = require('express-async-handler')

const NhanVien = require('../models/nhanVienModel')



const getNhanViens = asyncHandler(async (req, res) => {
  const nhanvien = await NhanVien.find()

  res.status(200).json(nhanvien)
})

const setNhanVien = asyncHandler(async (req, res) => {
  if (!req.body.MaNv ||!req.body.hovaTen|| !req.body.quocTich|| !req.body.gioiTinh || !req.body.ngaysinh ||
     !req.body.tonGiao || !req.body.CCCD || !req.body.noiSinh ||!req.body.danToc ||!req.body.TrinhDoHocVan ||!req.body. diaChi||!req.body.sdt ||!req.body.maLuong || !req.body.maDv ||!req.body.chuyenMon ||!req.body.maBHXH ||!req.body.maThue ||!req.body.Email ) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const nhanvien = await NhanVien.create({
    MaNv: req.body.MaNv,
    hovaTen:req.body.hovaTen,
    gioiTinh: req.body.gioiTinh,
    ngaysinh:req.body.ngaysinh,
    tonGiao:req.body.tonGiao,
    diaChi:req.body.diaChi,
    CCCD:req.body.CCCD,
    noiSinh:req.body.noiSinh,
    quocTich:req.body.quocTich,
    danToc: req.body.danToc,
    TrinhDoHocVan: req.body.TrinhDoHocVan,
    sdt:req.body.sdt,
    maLuong: req.body.maLuong,
    maDv:req.body.maDv,
    chuyenMon: req.body.chuyenMon,
    maBHXH:req.body.maBHXH,
    maThue:req.body.maThue,
    Email:req.body.Email,

   
  })

  res.status(200).json(nhanvien)
})

const getNhanVien = asyncHandler(async (req, res) => {
  const nhanvien = await NhanVien.findById(req.params.id)
  res.status(200).json(nhanvien)
})

const updateNhanVien = asyncHandler(async (req, res) => {
  const nhanvien = await NhanVien.findById(req.params.id)
  if (!nhanvien) {
    res.status(400)
    throw new Error('NhanVien not found')
  }
  if (!req.body.MaNv ||!req.body.hovaTen|| !req.body.quocTich|| !req.body.gioiTinh || !req.body.ngaysinh ||
     !req.body.tonGiao || !req.body.CCCD || !req.body.noiSinh ||!req.body.danToc ||!req.body.TrinhDoHocVan ||!req.body. diaChi||!req.body.sdt ||!req.body.maLuong || !req.body.maDv ||!req.body.chuyenMon ||!req.body.maBHXH ||!req.body.maThue ||!req.body.Email ) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }
  const updatedNhanVien = await NhanVien.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
   res.status(200).json(updatedNhanVien)
})

const deleteNhanVien = asyncHandler(async (req, res) => {
  const nhanvien = await NhanVien.findById(req.params.id)
  if (!nhanvien) {
    res.status(400)
    throw new Error('NhanVien not found')
  }
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }
  await nhanvien.remove()
  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getNhanViens,
  setNhanVien,
  getNhanVien,
  updateNhanVien,
  deleteNhanVien,
}
