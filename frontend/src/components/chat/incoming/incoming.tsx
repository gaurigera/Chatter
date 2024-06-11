import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MsgEdit } from "../MsgEdit";

function Incoming() {
  return (
    <div className="py-2">
      <div className="flex gap-1">
        <div className="flex-none">
          <Avatar>
            <AvatarFallback>DR</AvatarFallback>
          </Avatar>
        </div>
        <div className="message inner-card">
          <div className="flex-1">
            <div className="flex flex-row-reverse">
              <div className="">
                <MsgEdit />
              </div>
              <span className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                eveniet accusantium, autem voluptate doloribus similique error
                nesciunt omnis, soluta amet dolor excepturi neque laborum
                accusamus dolores suscipit distinctio. Ut, quibusdam. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur,
              </span>
            </div>
          </div>
          <div className="flex justify-end text-xs text-white/65">14:05</div>
        </div>
      </div>
    </div>
  );
}

export default Incoming;
