import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const MessagesV2 = () => {
  const socket = io("http://localhost:3000");

  const messages = useRef<any[]>([]);
  const messageText = useRef<string>("");
  const joined = useRef<boolean>(false);
  const name = useRef<string>("");
  const typingDisplay = useRef<string>("");

  useEffect(() => {
    socket.emit("findAllMessages", {}, (res: any) => {
      messages.current = res;
      console.log(messages.current);
    });

    socket.on("message", (message) => {
      messages.current.push(message);
    });
  }, []);

  const join = () => {
    socket.emit("join", { name: name.current }, () => {
      joined.current = true;
    });
  };

  const sendMessage = () => {
    socket.emit("createMessage", { text: messageText.current }, () => {
      messageText.current = "";
    });
  };

  let timeout;
  const emitTyping = () => {
    socket.emit("typing", { isTyping: true });
    timeout = setTimeout(() => {
      socket.emit("typing", { isTyping: false });
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center bg-black">
      {messages.current.map((message, i) => (
        <div key={i}>{` ${message.name}  ${message.text}`}</div>
      ))}
    </div>
  );
};

export default MessagesV2;
