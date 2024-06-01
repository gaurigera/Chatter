"use client";

import { VanishInput } from "./vanish-input";

export function Input() {
    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex flex-col justify-center items-center px-4">
      <VanishInput
        placeholder={"Type your message here.."}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
