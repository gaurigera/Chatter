"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

import {
  MDXEditor,
  MDXEditorMethods,
  codeBlockPlugin,
  headingsPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
} from "@mdxeditor/editor";

export function Editor({
  placeholder,
  onChange,
  onSubmit,
}: {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const mdxRef = useRef<MDXEditorMethods>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit && onSubmit(e);
  };
  return (
    <form
      className={
        "w-full max-w-xl mx-auto border-2 bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden p-2 pl-5 flex items-end h-auto dark:border-white/40"
      }
      onSubmit={handleSubmit}
    >
      <div className="flex-1 items-center">
        <MDXEditor
          markdown=""
          plugins={[
            headingsPlugin(),
            listsPlugin(),
            codeBlockPlugin(),
            linkPlugin(),
            markdownShortcutPlugin(),
          ]}
          ref={mdxRef}
          autoFocus
          contentEditableClassName="overscroll-contain outline-none w-full text-sm sm:text-base z-50 border-none text-black dark:text-white h-auto prose prose-slate prose-a:text-blue-500 prose-strong:dark:text-white"
        />
      </div>

      <div className="h-full ml-2 flex items-end">
        <div className="">
          <button
            type="submit"
            className="z-50 h-8 w-8 rounded-full disabled:bg-gray-100 bg-black dark:bg-zinc-500 dark:disabled:bg-zinc-800 transition duration-200 flex items-center justify-center"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-300 h-4 w-4"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <motion.path
                d="M5 12l14 0"
                initial={{
                  strokeDasharray: "50%",
                  strokeDashoffset: "50%",
                }}
                animate={{
                  strokeDashoffset: value ? 0 : "50%",
                }}
                transition={{
                  duration: 0.3,
                  ease: "linear",
                }}
              />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </motion.svg>
          </button>
        </div>
      </div>
    </form>
  );
}