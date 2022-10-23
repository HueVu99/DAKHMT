const mongoose = require("mongoose");

const thue = mongoose.Schema(
  {
    MaNv: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'NhanVien',
    },
    maThue: {
      type: String,
      required: [true, "Please add a text value"],
    },
    coquanThue: {
      type: String,
      required: [true, "Please add a text value"],
    },
    ngayDK: {
      type: Number,
      required: [true, "Please add a text value"],
    },
    maLuong: {
      type: String,
      required: [true, "Please add a text value"],
    },
    soTienDong: {
      type: Number,
      required: [true, "Please add a text value"],
    },
   

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Luong", thue);
