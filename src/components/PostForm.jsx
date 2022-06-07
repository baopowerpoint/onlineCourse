import React, { useEffect } from "react";
import HomePageReturn from "./signup/HomePageReturn";
import { useState } from "react";

import ProgressBar from "./progressBar";
import { db } from "../firebase";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, setDoc } from "firebase/firestore";

const PostForm = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState(0);
  const [imgUrl, setImgUrl] = useState(null);
  const [progress, setProgress] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgress(prog);
      },
      (err) => {
        console.log(err);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImgUrl(url);
        });
      }
    );
  };
  useEffect(() => {
    function addDocument() {
      if (imgUrl) {
        addDoc(collection(db, "posts"), {
          title,
          content,
          price,
          imgUrl,
        });
      } else {
        return;
      }
    }
    addDocument();
  }, [imgUrl]);
  if (progress === 100) {
    setProgress(null);
  }
  return (
    <div className="p-5">
      <HomePageReturn />
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-heading4 mb-5">Đăng bài(admin only)</h1>
        <input
          type="text"
          className="border-b-[1px] mt-5 w-full focus:shadow-sm focus:outline-none"
          placeholder="Tiêu đề"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="border-b-[1px] mt-5 w-full focus:shadow-sm focus:outline-none"
          placeholder="Nội dung"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <input
          type="text"
          className="border-b-[1px] mt-5 w-full focus:shadow-sm focus:outline-none"
          placeholder="Giá"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />

        <input
          className="block w-full text-sm mt-5 text-gray-900 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none "
          id="file_input"
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />

        <button
          type="submit"
          className="block mx-auto w-full bg-blue text-light py-2 rounded-lg mt-5"
          disabled={progress}
        >
          Đăng
        </button>

        {progress && <ProgressBar progressPercentage={progress} />}
      </form>
    </div>
  );
};

export default PostForm;
