import React from "react";
import HomePageReturn from "../components/signup/HomePageReturn";
import SignupForm from "../components/signup/SignupForm";
import SignupHero from "../components/signup/SignupHero";

const Signup = () => {
  return (
    <div className="bg-login-pattern bg-cover  w-full h-screen p-4">
      <HomePageReturn color="light" />
      <SignupHero />
      <SignupForm />
    </div>
  );
};

export default Signup;
