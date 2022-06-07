import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext();
export const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, authIsReady: true };
    case "logout":
      return { ...state, user: null, authIsReady: false };
    case "signup":
      return { ...state, user: action.payload, authIsReady: true };
    case "authIsReady":
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return;
  }
};
export const AuthContextProvider = ({ children }) => {
  const [user, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "authIsReady", payload: user });
      } else {
        console.log("none");
      }
    });
  }, []);
  console.log(user.user);
  return (
    <AuthContext.Provider value={{ ...user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
