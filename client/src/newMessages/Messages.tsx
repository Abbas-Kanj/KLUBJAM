import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const Messages = () => {
  const socket = io("http://localhost:3000");

  const [messages, setMessages] = useState<any[]>([]);
  const [messageText, setMessageText] = useState<string>("");
  const [joined, setJoined] = useState<boolean>(false);
  const [name, setName] = useState("");

  useEffect(() => {
    socket.emit("findAllMessages", {}, (res: any) => {
      setMessages(res);
    });

    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const join = (name: string) => {
    console.log("Name before join:", name);
    socket.emit("join", { name: name }, () => {
      setJoined(true);
    });
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    socket.emit("createMessage", { text: messageText }, () => {
      setMessageText("");
    });
  };

  return (
    <div className="flex justify-center items-center bg-black">
      {!joined ? (
        <div className="flex flex-col w-screen">
          <div>
            <label>What's your name?</label>
            <input
              id="name"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button
              onClick={() => {
                join(name);
              }}
            >
              join room
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-col w-screen bg-greyText">
            {messages.map((message, i) => (
              <div key={i}>{`${message.text}`}</div>
            ))}
          </div>
          <form className="flex" onSubmit={sendMessage}>
            <label className="font-semibold text-[14px] text-greyText">
              Message
            </label>
            <input
              id="message"
              type="text"
              className="bg-inputBox flex-grow h-[37px] rounded focus:outline-none p-1"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />
            <button
              className="bg-primary hover:opacity-75 text-[14px] px-[6px] font-bold rounded"
              type="submit"
            >
              Send message
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Messages;
