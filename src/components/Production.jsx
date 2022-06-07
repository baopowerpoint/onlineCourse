import React from "react";
import Badge from "./Badge";
import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";

const Production = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, "posts"), (snapshot) => {
      setImages(snapshot.docs.map((doc) => doc.data()));
    });
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
            src={image.imgUrl}
            alt={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Production;
