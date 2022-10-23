import React from "react";
import styles from "./admin.module.scss";
import { Link } from "react-router-dom";
const Menu = () => {
  const menu = [
    {
      link: "/nhanvien",
      decs: "Nhân viên",
    },
    {
      link: "/thue",
      decs: "Thuế",
    },
    {
      link: "/bhxh",
      decs: "Bảo hiểm xã hội",
    },
    {
      link: "/luong",
      decs: "Lương",
    },
  ];
  return (
    <div className={styles["menu"]}>
      {menu.map((item) => (
      <div className={styles["item"]}>
        <Link to={item.link}>{item.decs}</Link>
      </div>
      ))}
    </div>
  );
};

export default Menu;
