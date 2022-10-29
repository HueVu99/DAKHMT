import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createBHXH,
  deleteBHXH,
  editBHXH,
} from "../../features/bhxh/bhxhSlice";
const BHXH = () => {
  const { bhxh } = useSelector((state) => state.bhxh);
  const { nhanvien } = useSelector((state) => state.nhanvien);
  const [MaNv, setMaNv] = useState("");
  const [maBHXH, setmaBHXH] = useState("");
  const [ngaycap, setngaycap] = useState("");
  const [noiCap, setNoiCap] = useState("");
  const [noiDK, setnoiDk] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createBHXH({ MaNv, maBHXH, ngaycap, noiCap, noiDK }));
    setMaNv("");
    setmaBHXH("");
    setngaycap("");
    setNoiCap("");
    setnoiDk("");
  };
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const update = (id) => {
    setEdit(true);
    setId(id);
  };
  const onEdit = () => {
    dispatch(editBHXH({ id, MaNv, maBHXH, ngaycap, noiCap, noiDK }));
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
          placeholder="Mã BHXH"
          value={maBHXH}
          onChange={(e) => setmaBHXH(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Ngày Cấp"
          value={ngaycap}
          onChange={(e) => setngaycap(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Nơi Cấp"
          value={noiCap}
          onChange={(e) => setNoiCap(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Nơi Đăng Ký"
          value={noiDK}
          onChange={(e) => setnoiDk(e.target.value)}
        />
        {edit ? (
          <button onClick={onEdit}>edit BHXH</button>
        ) : (
          <button onClick={onSubmit}>Add BHXH</button>
        )}
      </div>

      <div style={{ display: "flex", gap: 20 }}>
        <div>Mã Nhân Viên</div>
        <div>Mã BHXH</div>
        <div>Ngày Cấp</div>
        <div>Nơi Cấp</div>
        <div>Nơi Đăng Ký</div>
      </div>
      {bhxh ? (
        <div>
          {bhxh.map((item) => (
            <div style={{ display: "flex" }}>
              <div>{item._id}</div>
              <div>{item.maBHXH}</div>
              <div>{item.hovaTen}</div>
              <div>{item.ngaycap}</div>
              <div>{item.noiCap}</div>
              <div>{item.noiDK}</div>
              <button
                onClick={() => dispatch(deleteBHXH(item._id))}
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
        <div>Khong co BHXH </div>
      )}
    </div>
  );
};

export default BHXH;
