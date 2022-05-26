import React from "react";
import { BsArrowLeftSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomePageReturn = () => {
  return (
    <div className="flex item-start cursor-pointer">
      <BsArrowLeftSquare className="text-light-nd text-heading5" />
      <Link to="/" className="text-light-nd ml-2 font-bold">
        Home
      </Link>
    </div>
  );
};

export default HomePageReturn;
