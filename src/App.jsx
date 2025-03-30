import Chat from "./components/Chat";
import { DarkThemeToggle } from "flowbite-react";

function App() {
  return (
    <>
      <main className="flex flex-col items-center min-h-screen bg-white dark:bg-gray-900">
        {/* Header */}
        <header className="fixed w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-600 py-1 px-2 z-10 flex justify-end ">
          <DarkThemeToggle className="cursor-pointer text-yellow-500 dark:text-yellow-200" />
        </header>

        {/* Chat Component */}
        <Chat />
      </main>
    </>
  );
}

export default App;
