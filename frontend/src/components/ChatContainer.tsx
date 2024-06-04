import { Input } from "./ui/Input";
import Incoming from "./ui/incoming";
import Outgoing from "./ui/outgoing";

function ChatContainer() {
  return (
    <div className="card">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 scrollComp">
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
