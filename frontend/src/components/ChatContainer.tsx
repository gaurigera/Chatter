import { Input } from "./ui/Input";
import Incoming from "./ui/incoming";
import Outgoing from "./ui/outgoing";

function ChatContainer() {
  return (
    <div className="h-full p-3 border-2 rounded-lg dark:border-white/40">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 scrollbar-thin scrollbar-thumb-neutral-100 scrollbar-track-white overflow-y-scroll">
          <Incoming />
          <Outgoing />
          <Incoming />
          <Outgoing />
        </div>
        <div className="pt-3">
          <Input />
        </div>
      </div>
    </div>
  );
}

export default ChatContainer;
