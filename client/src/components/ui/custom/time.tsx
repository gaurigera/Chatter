"use client";

import * as React from "react";

const Time = React.forwardRef<HTMLInputElement, { value: string }>(
  (props, ref) => {
    return <div className="flex justify-end text-xs text-black/40 dark:text-white/65">{props.value}</div>;
  }
);

export default Time