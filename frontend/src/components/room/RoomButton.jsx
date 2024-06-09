"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import * as React from "react";
import { AddRoom } from "./dropdown_buttons/AddRoom";
import { JoinRoom } from "./dropdown_buttons/JoinRoom";

function RoomButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-10 w-10 p-4 rounded-full bg-slate-100 dark:bg-darkGray text-black dark:text-white">
          +
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-2">
        <DropdownMenuGroup className="flex flex-col gap-2">
          <AddRoom />
          <JoinRoom />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default RoomButton;
