import React from "react";
import HomePageReturn from "../components/signup/HomePageReturn";
import LoginHero from "../components/login/LoginHero";
import LoginForm from "../components/login/LoginForm";
import LoginButton from "../components/login/LoginButton";

const Login = () => {
  return (
    <div className="bg-login-pattern bg-cover  w-full h-screen p-4">
      <HomePageReturn />
      <LoginHero />
      <LoginForm />
      <LoginButton />
    </div>
  );
};

export default Login;
