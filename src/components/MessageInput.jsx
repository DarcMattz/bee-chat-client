import { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full gap-2 bg-white dark:bg-gray-800 p-1 pb-2 border-t border-gray-100 dark:border-gray-600 flex items-center">
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg focus:outline-none dark:bg-gray-700 dark:text-white"
        onKeyDown={(e) => e.key === "Enter" && handleSend()} // Send message on Enter key press
      />
      <button
        onClick={handleSend}
        className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition duration-200"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
