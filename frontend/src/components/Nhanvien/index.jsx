import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createNhanVien,
  deleteNhanvien,
  editNhanVien,
} from "../../features/nhanvien/nhanvienSlice";
const Nhanvien = () => {
  const { nhanvien } = useSelector((state) => state.nhanvien);
  const [MaNv, setMaNV] = useState("");
  const [hovaTen, setHoTen] = useState("");
  const [quocTich, setQuocTich] = useState("");
  const [gioiTinh, setGioiTinh] = useState("");
  const [ngaysinh, setNgaySinh] = useState("");
  const [tonGiao, setTonGiao] = useState("");
  const [CCCD, setCCCD] = useState("");
  const [noiSinh, setNoiSinh] = useState("");
  const [danToc, setDanToc] = useState("");
  const [TrinhDoHocVan, setTrinhDoHocVan] = useState("");
  const [diaChi, setDiaChi] = useState("");
  const [sdt, setSĐT] = useState("");
  const [maLuong, setMaLuong] = useState("");
  const [maDv, setDonVi] = useState("");
  const [chuyenMon, setChuyenMon] = useState("");
  const [maBHXH, setBHXH] = useState("");
  const [maThue, setMaThue] = useState("");
  const [Email, setEmail] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createNhanVien({
        MaNv,
        hovaTen,
        quocTich,
        gioiTinh,
        ngaysinh,
        tonGiao,
        CCCD,
        noiSinh,
        danToc,
        TrinhDoHocVan,
        diaChi,
        sdt,
        maLuong,
        maDv,
        chuyenMon,
        maBHXH,
        maThue,
        Email,
      })
    );
    setMaNV("");
    setHoTen("");
    setQuocTich("");
    setGioiTinh("");
    setNgaySinh("");
    setTonGiao("");
    setCCCD("");
    setNoiSinh("");
    setDanToc("");
    setTrinhDoHocVan("");
    setDiaChi("");
    setSĐT("");
    setMaLuong("");
    setDonVi("");
    setChuyenMon("");
    setBHXH("");
    setMaThue("");
    setEmail("");
  };
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const update = (id) => {
    setEdit(true);
    setId(id);
  };
  const onEdit = () => {
    dispatch(
      editNhanVien({
        id,
        MaNv,
        hovaTen,
        quocTich,
        gioiTinh,
        ngaysinh,
        tonGiao,
        CCCD,
        noiSinh,
        danToc,
        TrinhDoHocVan,
        diaChi,
        sdt,
        maLuong,
        maDv,
        chuyenMon,
        maBHXH,
        maThue,
        Email,
      })
    );
  };
  return (
    <div>
      <div>
        <input
          type="text"
          name="text"
          id="text"
          value={MaNv}
          placeholder="Mã nhân viên"
          onChange={(e) => setMaNV(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Họ tên"
          value={hovaTen}
          onChange={(e) => setHoTen(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Quốc Tịch"
          value={quocTich}
          onChange={(e) => setQuocTich(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Ngày Sinh"
          value={ngaysinh}
          onChange={(e) => setNgaySinh(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Tôn Giáo"
          value={tonGiao}
          onChange={(e) => setTonGiao(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="CCCD"
          value={CCCD}
          onChange={(e) => setCCCD(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Nơi Sinh"
          value={noiSinh}
          onChange={(e) => setNoiSinh(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Dân Tộc"
          value={danToc}
          onChange={(e) => setDanToc(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Trình Độ Học Vấn"
          value={TrinhDoHocVan}
          onChange={(e) => setTrinhDoHocVan(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Địa Chỉ"
          value={diaChi}
          onChange={(e) => setDiaChi(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="sđt"
          value={sdt}
          onChange={(e) => setSĐT(e.target.value)}
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
          placeholder="Mã Dịch Vụ"
          value={maDv}
          onChange={(e) => setDonVi(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Chuyên Môn"
          value={chuyenMon}
          onChange={(e) => setChuyenMon(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Mã BHXH"
          value={maBHXH}
          onChange={(e) => setBHXH(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Mã Thuế"
          value={maThue}
          onChange={(e) => setMaThue(e.target.value)}
        />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {edit ? (
          <button onClick={onEdit}>edit Nhanvien</button>
        ) : (
          <button onClick={onSubmit}>Add Nhanvien</button>
        )}
      </div>
      <div style={{ display: "flex", gap: 20 }}>
        <div>Mã Nhân viên</div>
        <div>Họ và Tên</div>
        <div>Quốc Tịch</div>
        <div>Giới Tính</div>
        <div>Ngày Sinh</div>
        <div>Tôn giáo</div>
        <div>CCCD</div>
        <div>Nơi Sinh</div>
        <div>Dân Tộc</div>
        <div>Trình độ học vấn</div>
        <div>Địa Chỉ </div>
        <div>SĐT</div>
        <div>Chuyên Môn</div>
        <div>Mã BHXH</div>
        <div>Mã Thuế</div>
        <div>Email</div>
      </div>
      {nhanvien ? (
        <div>
          {nhanvien.map((item) => (
            <div style={{ display: "flex" }}>
              <div>{item._id}</div>
              <div>{item.hovaTen}</div>
              <div>{item.quocTich}</div>
              <div>{item.gioiTinh}</div>
              <div>{item.ngaysinh}</div>
              <div>{item.tonGiao}</div>
              <div>{item.CCCD}</div>
              <div>{item.noiSinh}</div>
              <div>{item.danToc}</div>
              <div>{item.TrinhDoHocVan}</div>
              <div>{item.diaChi}</div>
              <div>{item.sdt}</div>
              <div>{item.maLuong}</div>
              <div>{item.maDv}</div>
              <div>{item.chuyenMon}</div>
              <div>{item.maThue}</div>
              <div>{item.Email}</div>
              <button
                onClick={() => dispatch(deleteNhanvien(item._id))}
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
        <div>Khong co nhan vien</div>
      )}
    </div>
  );
};

export default Nhanvien;
