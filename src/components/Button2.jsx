import React from "react";
import { Link } from "react-router-dom";

const Button2 = (props) => {
  return (
    <Link to="/courses/">
      <button className="mx-auto font-bold block my-10 border-[1px] border-dark hover:bg-dark hover:border-[1px] hover:text-light  px-10 text-button py-3  rounded-full transition:all linear duration-300">
        {props.title}
      </button>
    </Link>
  );
};

export default Button2;
