import * as React from "react";
import Incoming from "./ui/incoming";
import Editor from "./ui/Input";

function Container() {
  return (
    <div className="min-h-screen min-w-full bg-black/55">
      <Incoming />
      <div>
        <Editor/>
      </div>
    </div>
  );
}

export default Container;
