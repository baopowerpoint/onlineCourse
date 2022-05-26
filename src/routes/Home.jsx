import React from "react";
import NavBar from "../components/NavBar";
import Introduction from "../components/Introduction";
import Production from "../components/Production";
import Button from "../components/Button";
import Search from "../components/Search";
import CourseIntroduction from "../components/CourseIntroduction";
import Feedback from "../components/Feedback";
import Footer from "../components/footer";
const Home = () => {
  return (
    <div>
      <div className="bg-hero-pattern h-screen  mb-12 bg-center bg-fixed bg-cover">
        <NavBar />
        <Introduction />
        <Button title="Discover" />
        <Search />
      </div>

      <Production />
      <CourseIntroduction />
      <Feedback />

      <Footer />
    </div>
  );
};

export default Home;
