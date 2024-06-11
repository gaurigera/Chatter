import { ChatRoomNav } from "./ChatRoomNav";
import { MsgInput } from "./input/MsgInput";
import Incoming from "./incoming/incoming";
import Outgoing from "./outgoing/outgoing";

function ChatContainer() {
  return (
    <div className="card">
      <div className="flex flex-col h-full overflow-hidden">
        <div>
          <ChatRoomNav />
        </div>
        <div className="flex-1 scrollComp dark:bg-lightGray">
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
