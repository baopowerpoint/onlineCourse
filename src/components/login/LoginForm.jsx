import React from "react";

const LoginForm = () => {
  return (
    <div className="w-full mx-auto mt-20 mb-5">
      <form className="text-center relative">
        <input
          type="text"
          className="bg-semi-black mt-4 p-3 rounded-2xl w-full focus:text-light focus:border-none focus:outline-blue placeholder:text-dark-rd placeholder:p-1"
          placeholder="Email"
        />
        <input
          type="text"
          className="bg-semi-black mt-4 p-3 rounded-2xl w-full focus:text-light focus:border-none focus:outline-blue placeholder:text-dark-rd placeholder:p-1"
          placeholder="Mật khẩu"
        />
      </form>
    </div>
  );
};

export default LoginForm;
