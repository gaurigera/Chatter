import { ChatRoomNav } from "./ChatRoomNav";
import { MsgInput } from "./MsgInput";
import Incoming from "./incoming";
import Outgoing from "./outgoing";

function ChatContainer() {
  return (
    <div className="card">
      <div className="flex flex-col h-full overflow-hidden">
        <div>
          <ChatRoomNav />
        </div>
        <div className="flex-1 scrollComp">
          <Incoming />
          <Outgoing />
          <Incoming />
          <Outgoing />
        </div>
        <div className="pt-3"> 
          <MsgInput />
        </div>
      </div>
    </div>
  );
}

export default ChatContainer;
