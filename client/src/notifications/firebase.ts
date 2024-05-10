import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCLj8Wp5cgRvYwtMT3d9t1SB3mRteBf57o",
  authDomain: "klubjam-23c23.firebaseapp.com",
  projectId: "klubjam-23c23",
  storageBucket: "klubjam-23c23.appspot.com",
  messagingSenderId: "1031035180250",
  appId: "1:1031035180250:web:0f89e76d3600ac3c7281e3",
  measurementId: "G-DTZK08NKXT",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log(permission);
};
