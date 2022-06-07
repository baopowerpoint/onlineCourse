import React from "react";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useAuthContext } from "../../hooks/useAuthContext";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();
  //context
  const { user, dispatch } = useAuthContext();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="w-full mx-auto mt-20 mb-5">
      <form onSubmit={handleLogin} className="text-center relative">
        <input
          type="email"
          className="bg-semi-black text-light mt-4 p-3 rounded-2xl w-full focus:text-light focus:border-none focus:outline-blue placeholder:text-dark-rd placeholder:p-1"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          className="bg-semi-black text-light mt-4 p-3 rounded-2xl w-full focus:text-light focus:border-none focus:outline-blue placeholder:text-dark-rd placeholder:p-1"
          placeholder="Mật khẩu"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {!isPending && (
          <button
            type="submit"
            className="block mx-auto w-full mt-5 p-3 rounded-full bg-blue "
          >
            Đăng nhập
          </button>
        )}
        {isPending && (
          <button
            type="submit"
            className="block mx-auto w-full mt-5 p-3 rounded-full bg-blue "
          >
            Loading
          </button>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
