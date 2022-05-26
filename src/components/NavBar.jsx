import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { HiOutlineMenuAlt4 } from "react-icons/hi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
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
          <Link to="/">Sản phẩm</Link>
        </li>
        <li>
          <Link to="/">Khoá Học</Link>
        </li>
        <li>
          <Link to="/">Về chúng tôi</Link>
        </li>
      </ul>
      <ul className="flex text-light font-bold text-body items-center justify-between">
        <li>MINH HIEN</li>
        <li>
          <HiOutlineMenuAlt4 onClick={handleOpen} className="cursor-pointer " />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
