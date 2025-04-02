import { useState } from "react";

const Login = ({ onJoin }) => {
  const [username, setUsername] = useState("");

  const handleJoin = () => {
    if (!username.trim()) {
      alert("Please enter your name!");
      return;
    }
    onJoin(username);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-50">
      <div className="bg-yellow-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-white text-center mb-4 ">
          Welcome to Bee-Chat!
        </h2>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-2 mb-4 text-gray-700 dark:text-white dark:bg-gray-700 border border-yellow-500 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleJoin()}
        />
        <button
          onClick={handleJoin}
          className="w-full px-4 py-2 bg-yellow-500 dark:bg-yellow-200 hover:bg-yellow-300 text-white dark:text-gray-700 cursor-pointer rounded-lg transition duration-200"
        >
          Join Chat
        </button>
      </div>
    </div>
  );
};

export default Login;
