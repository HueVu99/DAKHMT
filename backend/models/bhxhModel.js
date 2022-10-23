const mongoose = require("mongoose");

const bhxhSchema = mongoose.Schema(
  {
    MaNv: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'NhanVien',
    },
    maBHXH: {
      type: Number,
      required: [true, "Please add a text value"],
    },
    ngaycap: {
      type: Number,
      required: [true, "Please add a text value"],
    },
    noiCap: {
      type: String,
      required: [true, "Please add a text value"],
    },
    noiDK: {
      type: String,
      required: [true, "Please add a text value"],
    },
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("BHXH", bhxhSchema);
