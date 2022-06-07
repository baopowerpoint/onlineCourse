import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBBVCCo1TPImbIN3pUfNt0K3hxeY-xDihc",
  authDomain: "minh-hien-accessories.firebaseapp.com",
  projectId: "minh-hien-accessories",
  storageBucket: "minh-hien-accessories.appspot.com",
  messagingSenderId: "264828659440",
  appId: "1:264828659440:web:10c874fa2df52b0d478435",
};
//khởi tạo firebase
const app = initializeApp(firebaseConfig);
//khởi tạo dịch vụ của firebase
//Xác thực
export const auth = getAuth(app);
//Database
export const db = getFirestore(app);
//tạo một tham chiếu tới dịch vụ storage, dùng để tạo ra các tham chiếu đến storage bucket sau này
export const storage = getStorage(app);
