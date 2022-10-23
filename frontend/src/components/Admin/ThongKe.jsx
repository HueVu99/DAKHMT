import React from "react";
import styles from "./admin.module.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNhanViens, reset } from "../../features/nhanvien/nhanvienSlice";

const ThongKe = () => {
  const dispatch = useDispatch();
  const { nhanvien, isError, message } = useSelector((state) => state.nhanvien);
  useEffect(() => {
    dispatch(getNhanViens());

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);
  return (
    <div>
      Thông kê nhân viên:{nhanvien.length}
      Thông kế tổng lương ,tổng thuế,bhxh
    </div>
  );
};

export default ThongKe;
