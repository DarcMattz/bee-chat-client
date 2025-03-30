import { useState, useEffect } from "react";
import { socket } from "../services/socket";
import Login from "./Login";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

const Chat = () => {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [joined, setJoined] = useState(false);

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

    return () => {
      socket.off("message");
      socket.off("userJoined");
      socket.off("userLeft");
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
        <Login onJoin={joinChat} />
      ) : (
        <div className="w-full">
          <div className="">
            {" "}
            {/* Add margin-bottom to prevent overlap */}
            <Messages messages={messages} username={username}/>
          </div>
          <MessageInput onSend={sendMessage} />
        </div>
      )}
    </div>
  );
};

export default Chat;
