import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  //khởi tạo state của error và pending
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { user, dispatch } = useAuthContext();

  //khởi tạo hàm mà sẽ sign up user khi user đăng ký
  const signup = async (email, password, userName) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then((res) => {
        dispatch({ type: "signup", payload: res.user });
      });
      updateProfile(auth.currentUser, { displayName: userName });

      setError(null);
      setIsPending(false);
    } catch (err) {
      setError(err);
      setIsPending(false);
    }
  };
  return { signup, error, isPending };
};
