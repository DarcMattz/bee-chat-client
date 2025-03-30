import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("https://bee-chat-server.up.railway.app", {
  transports: ["websocket"],
});

const Chat = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]); // Update messages
    });

    socket.on("userJoined", ({ user }) => {
      setMessages((prev) => [...prev, { user, text: "joined the chat" }]);
    });

    socket.on("userLeft", (user) => {
      setMessages((prev) => [...prev, { user, text: "left the chat" }]);
    });

    return () => socket.disconnect();
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("message", message);
      setMessage("");
    }
  };

  const joinChat = () => {
    if (!username.trim()) {
      alert("Add a Name!");
      return;
    }
    setJoined(true);
    socket.emit("join", username);
  };

  return (
    <div>
      {!joined ? (
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => {
              setUsername(e.target.value);
              console.log(username);
            }} // Update state
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                joinChat(); // Call joinChat when Enter is pressed
              }
            }}
          />
          <button onClick={joinChat}>Join Chat</button>
        </div>
      ) : (
        <div>
          <div>
            {messages.map((msg, index) => (
              <p key={index}>
                <strong>{msg.user}:</strong> {msg.text}
              </p>
            ))}
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      )}
    </div>
  );
};

export default Chat;
