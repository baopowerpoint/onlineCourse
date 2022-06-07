import React from "react";
//hook
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signup, error, isPending } = useSignup();
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, name);
  };

  return (
    <div className="w-full mx-auto mt-20 mb-5">
      <form onSubmit={handleSubmit} className="text-center relative">
        <div className="flex gap-4">
          <input
            type="text"
            className="bg-semi-black p-3 rounded-2xl w-full focus:text-light focus:border-none focus:outline-blue placeholder:text-dark-rd placeholder:p-1"
            placeholder="Họ"
          />
          <input
            type="text"
            className="bg-semi-black  p-3 rounded-2xl w-full focus:text-light focus:border-none focus:outline-blue placeholder:text-dark-rd placeholder:p-1"
            placeholder="Tên"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <input
          type="text"
          className="bg-semi-black mt-4 p-3 rounded-2xl w-full focus:text-light focus:border-none focus:outline-blue placeholder:text-dark-rd placeholder:p-1"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          className="bg-semi-black mt-4 p-3 rounded-2xl w-full focus:text-light focus:border-none focus:outline-blue placeholder:text-dark-rd placeholder:p-1"
          placeholder="Mật khẩu"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        {!isPending && (
          <button
            type="submit"
            className="block mx-auto w-full p-3 mt-5 rounded-full bg-blue "
          >
            Tạo Tài khoản
          </button>
        )}

        {isPending && (
          <button
            type="submit"
            className="block mx-auto w-full p-3 mt-5 rounded-full bg-blue "
            disabled
          >
            Loading
          </button>
        )}
      </form>
    </div>
  );
};

export default SignupForm;
