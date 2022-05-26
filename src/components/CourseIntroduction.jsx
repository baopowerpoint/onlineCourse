import React from "react";
import Button2 from "./Button2";
const CourseIntroduction = () => {
  return (
    <div>
      <div className=" mb-10 w-36 border-b-[1px] border-dark mx-auto"></div>
      <p className="text-heading5 text-center text-dark font-bold">
        Khởi nghiệp, kinh doanh bằng những sản phẩm đính kết?
      </p>
      <p className="text-body2 text-center text-dark font-normal mt-5">
        Đã có thể tham gia khoá học thiết kế, tạo ra những sản phẩm đính kết
      </p>
      <Button2 title="Tìm Hiểu Ngay" />
    </div>
  );
};

export default CourseIntroduction;
