import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Nhanvien from "./pages/Nhanvien";
import BHXH from "./pages/BHXH";
import Luong from "./pages/Luong";
import Thue from "./pages/Thue";
import { useEffect } from "react";
import {  useDispatch } from "react-redux";
import { getNhanViens } from "./features/nhanvien/nhanvienSlice";
import { getThues } from "./features/thue/thueSlice";
import { getLuongs } from "./features/luong/luongSlice";
import { getBHXHs } from "./features/bhxh/bhxhSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNhanViens());
    dispatch(getThues());
    dispatch(getLuongs());
    dispatch(getBHXHs());
  }, [dispatch]);
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/nhanvien" element={<Nhanvien />} />
            <Route path="/bhxh" element={<BHXH />} />
            <Route path="/luong" element={<Luong/>} />
            <Route path="/thue" element={<Thue/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
