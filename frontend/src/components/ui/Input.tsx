"use client";

import React from "react";

const Editor = () => {
  const [editorContent, setEditorContent] = React.useState<string>("");

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <textarea className="bg-transparent resize-none max-h-52 p-4" tabIndex={0} placeholder="Send a message..."/>;
    </div>
  );
};

export default Editor;
