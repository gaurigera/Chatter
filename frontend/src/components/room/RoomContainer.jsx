import { ModeToggle } from "../ui/themeToggle";
import RoomDesc from "./RoomDesc";

function RoomContainer() {
  return (
    <div className="card">
      <div className="flex flex-col h-full">
        <div className="flex-1 scrollComp">
          <div>
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
