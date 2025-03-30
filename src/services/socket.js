import { io } from "socket.io-client";

const SOCKET_URL = "https://bee-chat-server.up.railway.app";

export const socket = io(SOCKET_URL, {
  transports: ["websocket"],
});
