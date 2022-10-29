const asyncHandler = require('express-async-handler')

const BHXH = require('../models/bhxhModel')



const getBHXHS = asyncHandler(async (req, res) => {
  const bhxh = await BHXH.find()

  res.status(200).json(bhxh)
})

const setBHXH = asyncHandler(async (req, res) => {
  if (!req.body.MaNv ||!req.body.maBHXH|| !req.body.ngaycap|| !req.body.noiCap || !req.body.noiDK ) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  
  const bhxh = await BHXH.create({
    MaNv: req.body.MaNv,
    maBHXH:req.body.maBHXH,
    ngaycap:req.body.ngaycap,
    noiCap:req.body.noiCap,
    noiDK:req.body.noiDK,
   
  })

  res.status(200).json(bhxh)
})

const getBHXH = asyncHandler(async (req, res) => {
  const bhxh = await BHXH.findById(req.params.id)
  res.status(200).json(bhxh)
})

const updatedBHXH = asyncHandler(async (req, res) => {
  const bhxh = await BHXH.findById(req.params.id)
  if (!bhxh) {
    res.status(400)
    throw new Error('BHXH not found')
  }
  if (!req.body.MaNv ||!req.body.maBHXH|| !req.body.ngaycap|| !req.body.noiCap || !req.body.noiDK ) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }
  const updatedBHXH = await BHXH.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
   res.status(200).json(updatedBHXH)
})

const deleteBHXH = asyncHandler(async (req, res) => {
  const bhxh = await BHXH.findById(req.params.id)
  if (!bhxh) {
    res.status(400)
    throw new Error('BHXH not found')
  }
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }
  await bhxh.remove()
  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getBHXHS,
  setBHXH,
  getBHXH,
  updatedBHXH,
  deleteBHXH,
}
