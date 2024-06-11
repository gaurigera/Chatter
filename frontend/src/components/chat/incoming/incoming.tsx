import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Message from "@/components/ui/custom/message";

function Incoming() {
  return (
    <div className="py-2">
      <div className="flex gap-1">
        <div className="flex-none">
          <Avatar>
            <AvatarFallback>DR</AvatarFallback>
          </Avatar>
        </div>
        <Message />
      </div>
    </div>
  );
}

export default Incoming;
