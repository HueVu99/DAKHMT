import React from "react";
import styles from "./admin.module.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNhanViens } from "../../features/nhanvien/nhanvienSlice";
import { getThues } from "../../features/thue/thueSlice";
import { getLuongs } from "../../features/luong/luongSlice";
import { getBHXHs } from "../../features/bhxh/bhxhSlice";
const ThongKe = () => {
  const dispatch = useDispatch();
  const { nhanvien, isError, message } = useSelector((state) => state.nhanvien);
  const { thue } = useSelector((state) => state.thue);
  const { luong } = useSelector((state) => state.luong);
  const { bhxh } = useSelector((state) => state.bhxh);

  return (
    <div>   
      Thông kê nhân viên:{nhanvien.length}
      Tổng thuế:{thue.length}
      Lương: {luong.length}
      BHXH: {bhxh.length}
    </div>
  );
};

export default ThongKe;
