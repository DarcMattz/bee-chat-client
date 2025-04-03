import Chat from "./components/Chat";
import { DarkThemeToggle } from "flowbite-react";
import useChatStore from "./store";
import BackButton from "./components/BackButton";

function App() {
  const { userCount, joined } = useChatStore();

  return (
    <>
      <main className="flex flex-col items-center min-h-screen bg-white dark:bg-gray-900">
        items-center{" "}
        <header className="fixed w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-600 py-1 px-2 pl-5 z-10 flex justify-between items-center">
          <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-white font-semibold">
            {joined ? <BackButton /> : ""}
            <div className="">🐝 {userCount}</div>
          </div>
          <DarkThemeToggle className="cursor-pointer text-yellow-500 dark:text-yellow-200" />
        </header>
        {/* Chat Component */}
        <Chat />
      </main>
    </>
  );
}

export default App;
