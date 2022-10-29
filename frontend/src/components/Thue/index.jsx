import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createThue,
  deleteThue,
  editThue,
} from "../../features/thue/thueSlice";
const Thue = () => {
  const { thue } = useSelector((state) => state.thue);
  const [MaNv, setMaNV] = useState("");
  const [maThue, setMaThue] = useState("");
  const [coquanThue, setCoQuanThue] = useState("");
  const [ngayDK, setNgayDK] = useState("");
  const [maLuong, setMaLuong] = useState("");
  const [soTienDong, setSoTienDong] = useState("");
  const { nhanvien } = useSelector((state) => state.nhanvien);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createThue({ MaNv, maThue, coquanThue, ngayDK, maLuong, soTienDong })
    );
    setMaNV("");
    setMaThue("");
    setCoQuanThue("");
    setNgayDK("");
    setMaLuong("");
    setSoTienDong("");
  };
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const update = (id) => {
    setEdit(true);
    setId(id);
  };
  const onEdit = () => {
    dispatch(
      editThue({
        id,
        MaNv,
        maThue,
        coquanThue,
        ngayDK,
        maLuong,
        soTienDong,
      })
    );
  };
  return (
    <div>
      <div>
        <select onChange={(e) => setMaNV(e.target.value)}>
          <option disabled selected>
            Chọn nhân viên
          </option>
          {nhanvien.map((item) => (
            <option value={item._id}>{item.hovaTen}</option>
          ))}
        </select>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="MaThue"
          value={maThue}
          onChange={(e) => setMaThue(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Cơ Quan Thuế"
          value={coquanThue}
          onChange={(e) => setCoQuanThue(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Ngày Đăng Ký"
          value={ngayDK}
          onChange={(e) => setNgayDK(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Mã Lương"
          value={maLuong}
          onChange={(e) => setMaLuong(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Số Tiền Đóng"
          value={soTienDong}
          onChange={(e) => setSoTienDong(e.target.value)}
        />
        {edit ? (
          <button onClick={onEdit}>edit Thuế</button>
        ) : (
          <button onClick={onSubmit}>Add Thuế</button>
        )}
       
      </div>
      <div style={{ display: "flex", gap: 20 }}>
        <div>Mã Nhân Viên</div>
        <div>Mã Thuế</div>
        <div>Cơ Quan Thuế</div>
        <div>Ngày Đăng Ký</div>
        <div>Mã Lương</div>
        <div>Số Tiền Đóng</div>
      </div>
      {thue ? (
        <div>
          {thue.map((item) => (
            <div style={{ display: "flex" }}>
              <div>{item.MaNv}</div>
              <div>{item.mathue}</div>
              <div>{item.coquanThue}</div>
              <div>{item.ngayDK}</div>
              <div>{item.maLuong}</div>
              <div>{item.soTienDong}</div>
              <button
                onClick={() => dispatch(deleteThue(item._id))}
                className="close"
              >
                X
              </button>
              <button onClick={() => update(item._id)} className="close">
                Edit
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>Khong co Thuế</div>
      )}
    </div>
  );
};

export default Thue;
