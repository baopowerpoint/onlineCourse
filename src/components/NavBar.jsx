import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogout } from "../hooks/useLogout";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useAuthContext } from "../hooks/useAuthContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };
  const { user } = useAuthContext();
  return (
    <div className="p-5 sticky top-0 bg-opacity-10 bg-black backdrop-filter backdrop-blur-lg transition-all duration-200 ease-linear">
      <ul
        className={
          isOpen
            ? "flex flex-col items-center font-light text-light-nd text-body2"
            : "hidden items-center font-light text-light-nd text-body2"
        }
      >
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          <Link to="/products">Sản phẩm</Link>
        </li>
        <li>
          <Link to="/courses">Khoá Học</Link>
        </li>
        <li>
          <Link to="/about">Về chúng tôi</Link>
        </li>
        {user && (
          <li onClick={handleLogout} className=" cursor-pointer">
            Đăng xuất
          </li>
        )}
        {!user && (
          <>
            <li className=" cursor-pointer">
              <Link to="/signup">Đăng nhập/ Đăng ký</Link>
            </li>{" "}
          </>
        )}
      </ul>
      <ul className="flex text-light font-bold text-body items-center justify-between">
        <li>MINH HIEN</li>
        {user && (
          <li>
            <Link to="/profile">
              <CgProfile />
            </Link>
          </li>
        )}
        <li className="flex ">
          {/* <IoIosLogOut className="text-light cursor-pointer z-20" /> */}
          <HiOutlineMenuAlt4 onClick={handleOpen} className="cursor-pointer " />
        </li>
      </ul>
      <div className="absolute hidden bg-black bg-opacity-40 -translate-x-1/3 text-light w-[200px] text-center left-1/2">
        <ul>
          <li>Tài khoản</li>
          <li>Khoá học</li>
          <li>Sản phẩm đã lưu</li>
          <li>Đăng xuất</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
