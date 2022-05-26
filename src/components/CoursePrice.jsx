import React from "react";

const CoursePrice = () => {
  return (
    <div className="mt-10">
      <h1 className="mt-5 text-heading3 w-1/2 text-center border-t-[1px] border-t-dark-rd font-bold mx-auto">
        Học Phí
      </h1>
      <div className="w-4/5 font-normal my-10 py-10 text-dark-nd text-heading6 bg-light-nd text-center mx-auto drop-shadow-lg">
        <h1 className="font-bold">Cá nhân</h1>
        <h1 className="text-6 mt-5 font-normal line-through">5.990.000 VND</h1>
        <h1 className="text-heading3 mb-10 font-bold">5.000.000 VND</h1>
        <div className="text-body2">
          <p className="line-through text-light-rd">Giảm 10% tổng thanh toán</p>
          <p className="text-dark">Sở hữu trọn đời</p>
          <p className="text-dark">Không phụ thu bất kì khoản phí nào</p>
          <p className="text-dark">Hỗ trợ đến khi có việc làm</p>
        </div>
        <button className="bg-blue text-light px-5 py-2 rounded-xl my-5">
          Thanh toán
        </button>
      </div>

      <div className="w-4/5 font-normal my-10 py-10 text-dark-nd text-heading6 bg-light-nd text-center mx-auto drop-shadow-lg">
        <h1 className="font-bold">Tổ chức</h1>
        <h1 className="text-6 mt-5 font-normal line-through">5.990.000 VND</h1>
        <h1 className="text-heading3 mb-10 font-bold">4.500.000 VND</h1>
        <div className="text-body2">
          <p className="text-dark">Giảm 10% tổng thanh toán</p>
          <p className="text-dark">Sở hữu trọn đời</p>
          <p className="text-dark">Không phụ thu bất kì khoản phí nào</p>
          <p className="text-dark">Hỗ trợ đến khi có việc làm</p>
        </div>
        <button className="bg-blue text-light px-5 py-2 rounded-xl my-5">
          Thanh toán
        </button>
      </div>
    </div>
  );
};

export default CoursePrice;
