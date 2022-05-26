import React from "react";
import CourseDetail from "../components/CourseDetail";
import CourseFeatures from "../components/CourseFeatures";
import CoursePrice from "../components/CoursePrice";
import NavBar from "../components/NavBar";

const Courses = () => {
  return (
    <div>
      <div className="w-full h-fit bg-course-pattern bg-cover bg-fixed bg-left">
        <NavBar />
        <CourseDetail />
      </div>
      <CourseFeatures />
      <CoursePrice />
    </div>
  );
};

export default Courses;
