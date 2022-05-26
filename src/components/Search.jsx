import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const Search = () => {
  return (
    <div>
      <form className="flex justify-center items-center">
        <input
          className="block focus:text-light  bg-transparent border-b-[1px] placeholder:text-body px-2 py-2 "
          placeholder="Nhập Sản Phẩm..."
          type="text"
        />
        <BsArrowRightCircle className="text-light text-[30px]" />
      </form>
    </div>
  );
};

export default Search;
