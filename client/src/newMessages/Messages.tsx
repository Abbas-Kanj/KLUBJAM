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
    socket.emit(
      "createMessage",
      { text: `[${name}]:   ${messageText}` },
      () => {
        setMessageText("");
      }
    );
  };

  return (
    <>
      {!joined ? (
        <div className="flex flex-col">
          <div className="flex flex-col h-full items-center mt-[280px]">
            <div className="flex gap-2 p-2">
              <label>Enter your name?</label>
              <input
                id="name"
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="border-[2px] border-solid rounded-[5px] border-primary bg-transparent w-[100px]"
              />
            </div>

            <button
              onClick={() => {
                join(name);
              }}
              className="bg-primary rounded-[5px] w-fit p-1 font-bold hover:opacity-70"
            >
              join room
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-between">
          <div className="flex flex-col min-h-[320px] p-2 overflow-x-hidden overflow-scroll overflow-y-hidden">
            {messages.map((message, i) => (
              <div key={i}>{`${message.text}`}</div>
            ))}
          </div>
          <div className="flex flex-col  ">
            <div className="border border-solid border-primary"></div>
            <form
              onSubmit={sendMessage}
              className=" px-[5px] py-[9px] flex justify-between gap-1"
            >
              <input
                type="text"
                id="message"
                placeholder="Type a message..."
                className="border-[2px] border-solid rounded-[5px] border-primary w-[192px] h-[30px] bg-transparent p-1"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
              />
              <button
                className="bg-primary rounded-[5px] flex-grow font-bold hover:opacity-70"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Messages;
