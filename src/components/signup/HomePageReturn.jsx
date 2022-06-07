import React from "react";
import { BsArrowLeftSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomePageReturn = (props) => {
  return (
    <div className={`flex text-${props.color}-nd item-start cursor-pointer`}>
      <BsArrowLeftSquare className=" text-heading5" />
      <Link to="/" className=" ml-2 font-bold">
        Home
      </Link>
    </div>
  );
};

export default HomePageReturn;
