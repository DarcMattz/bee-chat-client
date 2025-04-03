import { create } from "zustand";
import { socket } from "./services/socket";

const useChatStore = create((set) => ({
  username: "",
  messages: [],
  userCount: 0,
  joined: false,

  setUsername: (name) => set({ username: name, joined: true }),
  addMessage: (msg) => set((state) => ({ messages: [...state.messages, msg] })),
  setUserCount: (count) => set({ userCount: count }),

  sendMessage: (message) => {
    if (message.trim()) {
      socket.emit("message", message);
    }
  },

  joinChat: (name) => {
    socket.emit("join", name);
    set({ username: name, joined: true });
  },

  leaveChat: () => {
    socket.emit("leave");
    set({ username: "", joined: false, messages: [] });
  },
}));

export default useChatStore;
