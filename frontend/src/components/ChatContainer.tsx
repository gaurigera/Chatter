import { Input } from "./ui/Input";

function ChatContainer() {
  return (
    <div className="w-1/3 dark:bg-darkGray p-3 border-2 rounded-lg">
      <div className="flex h-full flex-col focus-visible:outline-0">
        <div className="flex-1 overflow-hidden"></div>
        <Input />
      </div>
    </div>
  );
}

export default ChatContainer;
