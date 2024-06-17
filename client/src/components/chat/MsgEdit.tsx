"use client";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

export function MsgEdit() {
  return (
    <div className="flex justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="dark:text-white/50 text-lightGray"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <div>Delete</div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div>Report</div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div>Silent</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
