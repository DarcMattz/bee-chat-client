import { BiLogOut } from "react-icons/bi";
import useChatStore from "../store";

const BackButton = () => {
  const {leaveChat} = useChatStore()

  return (
    <div 
    onClick={leaveChat}
    className="border border-gray-100 dark:bg-gray-900 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-1 cursor-pointer"
    >
      <BiLogOut size="20"/>
    </div>
  );
};

export default BackButton;
