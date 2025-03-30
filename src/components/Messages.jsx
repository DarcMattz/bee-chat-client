import { useEffect, useRef } from "react";

const Messages = ({ messages, username }) => {
  const messagesEndRef = useRef(null);

  // Auto scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="space-y-2">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`p-2 rounded-lg
            ${
              msg.user === username
                ? "bg-yellow-200 text-yellow-800 text-right items-end ml-auto"
                : "bg-yellow-200/50 dark:bg-gray-700 text-gray-800 dark:text-white"
            } 
          max-w-50`}
        >
          {msg.user === username ? null : (
            <strong className="text-yellow-800 dark:text-yellow-400">
              {msg.user}:
            </strong>
          )}{" "}
          {msg.text}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
