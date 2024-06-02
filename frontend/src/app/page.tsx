import ChatContainer from "@/components/ChatContainer";
import RoomContainer from "@/components/RoomContainer";
import DetailContainer from "@/components/DetailContainer";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Home() {
  return (
    <>
      <div className="h-screen z-0 flex flex-col dark:bg-darkGray p-2">
        <ResizablePanelGroup direction="horizontal">
          <main className="flex-1 overflow-hidden">
            <div className="flex h-full gap-2 overflow-hidden">
              <ResizablePanel defaultSize={20} minSize={10}>
                <RoomContainer />
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={43} minSize={35}>
                <ChatContainer />
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={35} minSize={25}>
                <DetailContainer />
              </ResizablePanel>
            </div>
          </main>
        </ResizablePanelGroup>
        <div className="m-auto">
          <p>Chatter</p>
        </div>
      </div>
    </>
  );
}
