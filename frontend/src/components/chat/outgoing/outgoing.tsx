import * as React from "react";
import { MsgEdit } from "../MsgEdit";

const Outgoing = () => {
  return (
    <div className="py-2 flex justify-end">
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
              accusamus dolores suscipit distinctio. Ut, quibusdam. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Aspernatur,
            </span>
          </div>
        </div>
        <div className="flex justify-end text-xs">14:05</div>
      </div>
    </div>
  );
};

export default Outgoing;
