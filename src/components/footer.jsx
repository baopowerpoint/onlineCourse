import React from "react";
import { BsFacebook } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import { GrYoutube } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full mt-10 text-light-nd grid grid-cols-3 bg-dark-nd text-center">
      <div className="font-normal border-r border-r-light-rd">
        <h1 className="font-bold text-subheadline">Về chúng tôi</h1>
        <p className="font-normal">Team</p>
        <p className="font-normal">Portfolio</p>
        <p className="font-normal">Product</p>
      </div>
      <div className="font-normal border-r border-r-light-rd">
        <h1 className="font-bold text-subheadline">Khoá học</h1>
        <p className="font-normal">Đính kết</p>
      </div>
      <div className="font-normal border-r border-r-light-rd">
        <h1 className="font-bold text-subheadline">Liên hệ</h1>
        <p className="font-normal">Thiết kế</p>
        <p className="font-normal">Mua Hàng</p>
      </div>
      <div className="social my-5  justify-items-center col-span-full flex justify-between w-1/3 mx-auto">
        <BsFacebook />
        <SiTiktok />
        <GrYoutube />
        <AiFillInstagram />
      </div>
    </div>
  );
};

export default Footer;
