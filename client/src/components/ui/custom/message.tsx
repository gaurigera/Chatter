import { MsgEdit } from "@/components/chat/MsgEdit";
import Time from "./time";

function Message() {
  return (
    <div className="message inner-card group">
      <div className="flex-1">
        <div className="flex flex-row-reverse">
          <div className="invisible group-hover:visible">
            <MsgEdit />
          </div>
          <span className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet
            accusantium, autem voluptate doloribus similique error nesciunt
            omnis, soluta amet dolor excepturi neque laborum accusamus dolores
            suscipit distinctio. Ut, quibusdam. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Aspernatur,
          </span>
        </div>
      </div>
      <Time value={"14:04"} />
    </div>
  );
}

export default Message;
