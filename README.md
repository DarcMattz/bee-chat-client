# Bee-Chat Frontend

Bee-Chat is a real-time chat application built using **React.js** and **Socket.io-client**. This repository contains the frontend for the chat system.

## 🚀 Features

- Real-time messaging using WebSockets
- User join/leave notifications
- Responsive chat interface
- Easy setup and deployment

## 📌 Tech Stack

- **React.js** (Frontend Framework)
- **Socket.io-client** (WebSocket Communication)
- **Vite** (Development Server)

## 🛠 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/DarcMattz/bee-chat-frontend.git
cd bee-chat-frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Set up environment variables

Create a `.env` file in the root directory and add:

```env
VITE_SERVER_URL=http://localhost:5000  # Replace with backend URL
```

### 4️⃣ Run the app

```bash
npm run dev
```

The app will start on **http://localhost:5173**.

## 📡 WebSocket Events

### 🔹 Client Events

| Event     | Payload        | Description            |
| --------- | -------------- | ---------------------- |
| `join`    | `{ username }` | A user joins the chat  |
| `message` | `{ text }`     | A user sends a message |

### 🔹 Server Events

| Event        | Payload          | Description                  |
| ------------ | ---------------- | ---------------------------- |
| `userJoined` | `{ user }`       | Broadcast when a user joins  |
| `message`    | `{ user, text }` | Broadcast new messages       |
| `userLeft`   | `{ user }`       | Broadcast when a user leaves |
