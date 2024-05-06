import { useState } from "react";

export default function MessageInput({
  send,
}: {
  send: (value: string) => void;
}) {
  const [value, setValue] = useState("");
  return (
    <div className="gap-7">
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="type message"
        value={value}
        className="text-black bg-slate-600"
      />
      <button
        className="rounded-lg w-12 h-10 bg-primary"
        onClick={() => {
          send(value);
        }}
      >
        Send
      </button>
    </div>
  );
}
