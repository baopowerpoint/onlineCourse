import React from "react";
import { Link } from "react-router-dom";

const LoginHero = () => {
  return (
    <div className="w-90 text-center mx-auto mt-10">
      <h3 className="text-subheading2 text-light-rd uppercase font-normal">
        Chào mừng quay trở lại
      </h3>
      <h1 className="text-heading3 font-bold text-light-nd">Đăng nhập</h1>

      <div className="flex items-center justify-center gap-2">
        <h3 className="text-subheading text-light-rd  font-normal">
          Chưa có tài khoản?
        </h3>
        <Link to="/signup">
          <h1 className="text-blue">Đăng ký</h1>
        </Link>
      </div>
    </div>
  );
};

export default LoginHero;
