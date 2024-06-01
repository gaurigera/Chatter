import ChatContainer from "@/components/ChatContainer";

export default function Home() {
  return (
    <>
      <div className="h-screen z-0 flex flex-col dark:bg-darkGray p-2">
        <main className="flex-col flex-1">
          <div className="h-full flex flex-1 gap-2">
            <div className="border-2 rounded-lg w-1/4"></div>
            <ChatContainer />
            <div className="flex-1 border-2 rounded-lg"></div>
          </div>
        </main>
        <div>Chatter</div>
      </div>
    </>
  );
}
