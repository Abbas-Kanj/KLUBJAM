import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const MessagesV2 = () => {
  const socket = io("http://localhost:3000");

  const messages = useRef<any[]>([]);

  useEffect(() => {
    socket.emit("findAllMessages", {}, (res: any) => {
      messages.current = res;
      console.log(messages.current);
    });
  }, []);

  return (
    <div className="flex justify-center items-center bg-black">
      {messages.current.map((message, i) => (
        <div key={i}>{` ${message.name}  ${message.text}`}</div>
      ))}
    </div>
  );
};

export default MessagesV2;
