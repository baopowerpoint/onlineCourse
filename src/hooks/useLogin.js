import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { user, dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password).then(
        (res) => {
          dispatch({ type: "login", payload: res.user });
        }
      );

      setIsPending(false);
    } catch (err) {
      console.log(err.message);
      setError(err);
      setIsPending(false);
    }
  };
  return { login, error, isPending };
};
