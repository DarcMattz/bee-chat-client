import { useState, useEffect } from "react";
import { socket } from "../services/socket";
import Login from "./Login";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

const Chat = () => {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [joined, setJoined] = useState(false);
  const [userCount, setUserCount] = useState(0); // Track active users

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("userJoined", ({ user }) => {
      setMessages((prev) => [...prev, { user, text: "joined the chat" }]);
    });

    socket.on("userLeft", (user) => {
      setMessages((prev) => [...prev, { user, text: "left the chat" }]);
    });

    socket.on("userCount", (count) => {
      setUserCount(count);
    });

    return () => {
      socket.off("message");
      socket.off("userJoined");
      socket.off("userLeft");
      socket.off("userCount");
    };
  }, []);

  const sendMessage = (message) => {
    socket.emit("message", message);
  };

  const joinChat = (name) => {
    setUsername(name);
    setJoined(true);
    socket.emit("join", name);
  };

  return (
    <div className="flex flex-col items-center p-4 py-15 w-full">
      {!joined ? (
        <>
          <div className="text-center text-gray-700 dark:text-white font-semibold mb-2">
            Active Users: {userCount}
          </div>
          <Login onJoin={joinChat} />
        </>
      ) : (
        <div className="w-full">
          {/* Show the user count */}

          <Messages messages={messages} username={username} />
          <MessageInput onSend={sendMessage} />
        </div>
      )}
    </div>
  );
};

export default Chat;
