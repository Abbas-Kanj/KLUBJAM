import React, { useEffect } from "react";
import { generateToken, messaging } from "./firebase.ts";
import { onMessage } from "firebase/messaging";

const FirebaseNotifications = () => {
  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log(payload);
    });
  }, []);
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-black">hello notifications</h1>
    </div>
  );
};

export default FirebaseNotifications;
