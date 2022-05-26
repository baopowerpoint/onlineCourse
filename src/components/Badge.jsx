import React from "react";

const Badge = () => {
  return (
    <div className="flex justify-around mx-2">
      <span className=" bg-gray-300 text-dark-nd uppercase text-sm font-medium py-1 px-5 rounded-full  ">
        Đính kết
      </span>
      <span className="  text-dark-nd uppercase text-sm font-medium py-1 px-5 rounded-full  ">
        Huy hiệu
      </span>
      <span className="  text-dark-nd uppercase text-sm font-medium py-1 px-5 rounded-full  ">
        Vòng
      </span>
      <span className="  text-dark-nd uppercase text-sm font-medium py-1 px-5 rounded-full  ">
        Nhẫn
      </span>
    </div>
  );
};

export default Badge;
