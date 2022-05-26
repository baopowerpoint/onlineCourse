import React from "react";
import Badge from "./Badge";
import { useState, useEffect } from "react";

const Production = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:4000/image")
        .then((res) => res.json())
        .then((data) => setImages(data));
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className=" mb-10 w-36 border-b-[1px] border-dark mx-auto"></div>
      <p className="text-heading3 text-center text-dark font-bold">
        Những sản phẩm tốt nhất
      </p>
      <Badge />
      <div className="images my-10 mx-2 ">
        {images.map((image, idx) => (
          <img
            key={idx}
            className="rounded-lg my-2"
            src={image.url}
            alt={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Production;
