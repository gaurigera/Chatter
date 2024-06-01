import { Input } from "./ui/Input";
import Incoming from "./ui/incoming";
import Outgoing from "./ui/outgoing";

function ChatContainer() {
  return (
    <div className="w-1/3 dark:bg-darkGray p-3 border-2 rounded-lg">
      <div className="flex h-full flex-col focus-visible:outline-0">
        <div className="flex-1 overflow-hidden">
          <Incoming></Incoming>
          <Outgoing ></Outgoing>
        </div>
        <Input />
      </div>
    </div>
  );
}

export default ChatContainer;
