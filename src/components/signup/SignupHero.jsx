import React from "react";
import { Link } from "react-router-dom";

const SignupHero = () => {
  return (
    <div className="w-90 text-center mx-auto mt-10">
      <h3 className="text-subheading2 text-light-rd uppercase font-normal">
        Bắt đầu miễn phí
      </h3>
      <h1 className="text-heading3 font-bold text-light-nd">
        Tạo mới tài khoản
      </h1>

      <div className="flex items-center justify-center gap-2">
        <h3 className="text-subheading text-light-rd  font-normal">
          Đã có tài khoản?
        </h3>
        <Link to="/login">
          <h1 className="text-blue">Đăng nhập</h1>
        </Link>
      </div>
    </div>
  );
};

export default SignupHero;
