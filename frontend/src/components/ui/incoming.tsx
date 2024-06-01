import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import * as React from "react";

function Incoming() {
  return (
    <div className="py-2">
      <div className="flex gap-1">
        <div className="flex-none">
          <Avatar>
            <AvatarFallback>DG</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col border-2 rounded-lg p-4 max-w-80 text-sm gap-1">
          <div className="flex-1">
            <span className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              eveniet accusantium, autem voluptate doloribus similique error
              nesciunt omnis, soluta amet dolor excepturi neque laborum
              accusamus dolores suscipit distinctio. Ut, quibusdam.{" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, voluptatibus. Distinctio beatae vero quia! Ipsam libero maxime esse, quod accusamus sunt unde cum sint in nobis recusandae fuga nemo eveniet.
            </span>
          </div>
          <div className="flex justify-end text-xs">14:05</div>
        </div>
      </div>
    </div>
  );
}

export default Incoming;
