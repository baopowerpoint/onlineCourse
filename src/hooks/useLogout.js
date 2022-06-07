import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = async () => {
    await signOut(auth)
      .then(() => {
        console.log("logged out");
        //setUser lại thành null sau khi logout
        dispatch({ type: "logout" });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { logout };
};
