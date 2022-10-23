const mongoose = require("mongoose");

const nhanVienSchema = mongoose.Schema(
  {
    MaNv: {
      type: Number,
      required: [true, "Please add a text value"],
    },
    hovaTen: {
      type: String,
      required: [true, "Please add a text value"],
    },
    quocTich: {
      type: String,
      required: [true, "Please add a text value"],
    },
    gioiTinh: {
      type: String,
      required: [true, "Please add a text value"],
    },
    ngaysinh: {
      type: Number,
      required: [true, "Please add a text value"],
    },
    tonGiao: {
      type: String,
      required: [true, "Please add a text value"],
    },
    CCCD: {
      type: Number,
      required: [true, "Please add a text value"],
    },
    noiSinh: {
      type: String,
      required: [true, "Please add a text value"],
    },
    danToc: {
      type: String,
      required: [true, "Please add a text value"],
    },
    TrinhDoHocVan: {
      type: String,
      required: [true, "Please add a text value"],
    },
   diaChi: {
      type: String,
      required: [true, "Please add a text value"],
    },
    sdt: {
      type: Number,
      required: [true, "Please add a text value"],
    },
    maLuong: {
      type: String,
      required: [true, "Please add a text value"],
    },
    maDv: {
      type: String,
      required: [true, "Please add a text value"],
    },
    chuyenMon: {
      type: String,
      required: [true, "Please add a text value"],
    },
    maBHXH: {
      type: String,
      required: [true, "Please add a text value"],
    },
    maThue: {
      type: String,
      required: [true, "Please add a text value"],
    },
    Email: {
      type: String,
      required: [true, "Please add a text value"],
    },
   
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("NhanVien", nhanVienSchema);
