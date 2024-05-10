import { useEffect } from "react";
import { generateToken, messaging } from "./firebase.ts";
import { onMessage } from "firebase/messaging";
import toast, { Toaster } from "react-hot-toast";
const FirebaseNotifications = () => {
  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log(payload);
      toast(payload.notification?.body!);
    });
  }, []);
  return (
    <>
      <Toaster></Toaster>
      <div className="flex justify-center items-center">
        <h1 className="text-black">hello notifications</h1>
      </div>
    </>
  );
};

export default FirebaseNotifications;
