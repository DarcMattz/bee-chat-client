import { useEffect } from "react";
import useChatStore from "../store";
import { socket } from "../services/socket";
import Login from "./Login";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

const Chat = () => {
  const {
    username,
    joined,
    messages,
    addMessage,
    setUserCount,
    joinChat,
    sendMessage,
  } = useChatStore();

  useEffect(() => {
    socket.on("message", (msg) => addMessage(msg));
    socket.on("userJoined", ({ user }) =>
      addMessage({ user, text: "joined the chat" })
    );
    socket.on("userLeft", (user) =>
      addMessage({ user, text: "left the chat" })
    );
    socket.on("userCount", (count) => setUserCount(count));

    return () => {
      socket.off("message");
      socket.off("userJoined");
      socket.off("userLeft");
      socket.off("userCount");
    };
  }, []);

  return (
    <div className="flex flex-col items-center p-4 py-15 w-full">
      {!joined ? (
        <Login onJoin={joinChat} />
      ) : (
        <div className="w-full">
          <Messages messages={messages} username={username} />
          <MessageInput onSend={sendMessage} />
        </div>
      )}
    </div>
  );
};

export default Chat;
