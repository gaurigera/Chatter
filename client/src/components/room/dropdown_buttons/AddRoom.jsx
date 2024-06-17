"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { CopyIcon } from "@radix-ui/react-icons";

export function AddRoom() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-slate-100 dark:bg-darkGray text-black dark:text-white">
          Add Room
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Room</DialogTitle>
          <DialogDescription>
            Create a room and connect with your friend
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link">Name</Label>
            <Input
              id="link"
              defaultValue="Room Number 1"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="grid grid-cols-2 flex-1 gap-2">
            <Label htmlFor="link">Link</Label>
            <div className="flex">
              <Input
                id="link"
                defaultValue="a433X32"
                readOnly
              />
              <Button type="submit" size="sm" className="px-3">
                <span className="sr-only">Copy</span>
                <CopyIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
