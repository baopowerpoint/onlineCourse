import React from "react";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
const NavBar = () => {
  return (
    <div className="p-5 sticky top-0 bg-opacity-10 bg-black backdrop-filter backdrop-blur-lg">
      <ul className="flex text-light font-bold text-body items-center justify-between">
        <li>MINH HIEN</li>
        <li>
          <HiOutlineMenuAlt4 />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
