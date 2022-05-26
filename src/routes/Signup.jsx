import React from "react";
import HomePageReturn from "../components/signup/HomePageReturn";
import SignupForm from "../components/signup/SignupForm";
import SignupHero from "../components/signup/SignupHero";
import SignupButton from "../components/signup/SignupButton";

const Signup = () => {
  return (
    <div className="bg-login-pattern bg-cover  w-full h-screen p-4">
      <HomePageReturn />
      <SignupHero />
      <SignupForm />
      <SignupButton />
    </div>
  );
};

export default Signup;
