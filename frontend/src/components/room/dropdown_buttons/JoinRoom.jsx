"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

export function JoinRoom() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-slate-100 dark:bg-darkGray text-black dark:text-white">
          Join Room
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join Room</DialogTitle>
          <DialogDescription>
            Join a room and connect with your friend
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Room code" className="text-right">
              Room code
            </Label>
            <Input id="Room code"/>
          </div>
        </div>
        <div>
          <Button type="submit">
            <span>Join</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
