import { ModeToggle } from "./ui/themeToggle";

function RoomContainer() {
  return (
    <div className="h-full p-3 border-2 rounded-lg dark:border-white/40">
      <div className="flex flex-col h-full">
        <div className="flex-1"></div>
        <div className="">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default RoomContainer;
