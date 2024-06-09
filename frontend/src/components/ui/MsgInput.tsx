"use client";

import { Editor } from "./Editor";

export function MsgInput() {
    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex flex-col justify-center items-center px-4">
      <Editor
        placeholder={"Type your message here.."}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
