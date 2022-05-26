import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to="signup">
      <button className="mx-auto font-bold block my-10 border-[1px] hover:bg-opacity-0 hover:border-[1px] hover:text-light bg-light-nd px-10 text-button py-3  rounded-full transition:all linear duration-300">
        {props.title}
      </button>
    </Link>
  );
};

export default Button;
