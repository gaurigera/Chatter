import { ModeToggle } from "../ui/themeToggle";
import RoomDesc from "./RoomDesc";
import RoomButton from "./RoomButton"

function RoomContainer() {
  return (
    <div className="card">
      <div className="flex flex-col h-full">
        <div className="py-2">
          <RoomButton />
        </div>
        <div className="flex-1 scrollComp">
          <div className="flex flex-col gap-2">
            <RoomDesc />
            <RoomDesc />
            <RoomDesc />
            <RoomDesc />
          </div>
        </div>
        <div className="">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default RoomContainer;
