import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createLuong,
  deleteLuong,
  editLuong,
} from "../../features/luong/luongSlice";

const Luong = () => {
  const { luong } = useSelector((state) => state.luong);
  const { nhanvien } = useSelector((state) => state.nhanvien);
  const [MaNv, setMaNv] = useState("");
  const [hovaTen, sethovaTen] = useState("");
  const [maCM, setmaCM] = useState("");
  const [luongCB, setluongCB] = useState("");
  const [phuCap, setphuCap] = useState("");
  const [ngayNhap, setngayNhap] = useState("");
  const [luongCBM, setluongCBM] = useState("");
  const [ngaySua, setngaySua] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createLuong({
        MaNv,
        hovaTen,
        maCM,
        luongCB,
        phuCap,
        ngayNhap,
        luongCBM,
        ngaySua,
      })
    );
    setMaNv("");
    sethovaTen("");
    setmaCM("");
    setluongCB("");
    setphuCap("");
    setngayNhap("");
    setluongCBM("");
    setngaySua("");
  };
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const update = (id) => {
    setEdit(true);
    setId(id);
  };
  const onEdit = () => {
    dispatch(
      editLuong({
        id,
        MaNv,
        hovaTen,
        maCM,
        luongCB,
        phuCap,
        ngayNhap,
        luongCBM,
        ngaySua,
      })
    );
  };
  return (
    <div>
      <div>
        <select onChange={(e) => setMaNv(e.target.value)}>
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
          placeholder="Họ Và Tên"
          value={hovaTen}
          onChange={(e) => sethovaTen(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Mã Chứng Minh"
          value={maCM}
          onChange={(e) => setmaCM(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Lương Cơ Bản"
          value={luongCB}
          onChange={(e) => setluongCB(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Phụ Cấp"
          value={phuCap}
          onChange={(e) => setphuCap(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Ngày Nhập"
          value={ngayNhap}
          onChange={(e) => setngayNhap(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Lương Cơ Bản Mới"
          value={luongCBM}
          onChange={(e) => setluongCBM(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Ngày Sửa"
          value={ngaySua}
          onChange={(e) => setngaySua(e.target.value)}
        />
        {edit ? (
          <button onClick={onEdit}>edit Luong</button>
        ) : (
          <button onClick={onSubmit}>Add Luong</button>
        )}
       
      </div>
      <div style={{ display: "flex", gap: 20 }}>
        <div>Mã Nhân Viên</div>
        <div>Họ và Tên</div>
        <div>Mã Chứng Minh</div>
        <div>Lương Cơ Bản</div>
        <div>Ngày Nhập</div>
        <div>Lương Cơ Bản Mới</div>
        <div>Ngày Sửa</div>
      </div>
      {luong ? (
        <div>
          {luong.map((item) => (
            <div style={{ display: "flex" }}>
              <div>{item.MaNv}</div>
              <div>{item.hovaTen}</div>
              <div>{item.maCM}</div>
              <div>{item.luongCB}</div>
              <div>{item.phuCap}</div>
              <div>{item.ngayNhap}</div>
              <div>{item.luongCBM}</div>
              <div>{item.ngaySua}</div>
              <button
                onClick={() => dispatch(deleteLuong(item._id))}
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
        <div>Khong co Lương</div>
      )}
    </div>
  );
};

export default Luong;
