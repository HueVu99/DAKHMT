const mongoose = require("mongoose");

const luong = mongoose.Schema(
  {
    MaNv: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'NhanVien',
    },
    hovaTen: {
      type: String,
      required: [true, "Please add a text value"],
    },
    maCM: {
      type: Number,
      required: [true, "Please add a text value"],
    },
    luongCB: {
      type: Number,
      required: [true, "Please add a text value"],
    },
    phuCap: {
      type: Number,
      required: [true, "Please add a text value"],
    },
    ngayNhap: {
      type: Number,
      required: [true, "Please add a text value"],
    },
    luongCBM: {
      type: Number,
      required: [true, "Please add a text value"],
    },
    ngaySua: {
      type: Number,
      required: [true, "Please add a text value"],
    },
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Luongs", luong);
