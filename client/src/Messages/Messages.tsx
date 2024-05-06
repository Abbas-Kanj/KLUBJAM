export default function Messages({ messages }: { messages: string[] }) {
  return (
    <div>
      {messages.map((message, i) => (
        <div key={i}>{message} </div>
      ))}
    </div>
  );
}
