import React from "react";
import HomePageReturn from "../components/signup/HomePageReturn";

import LoginForm from "../components/login/LoginForm";
import LoginHero from "../components/login/LoginHero";

const Login = () => {
  return (
    <div className="bg-login-pattern bg-cover  w-full h-screen p-4">
      <HomePageReturn color="light" />
      <LoginHero />
      <LoginForm />
    </div>
  );
};

export default Login;
