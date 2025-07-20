"use client";

import { useState } from "react";

import { cn } from "../../utils/cn";

type SpoilerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Spoiler({ children, className }: SpoilerProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <span
      onClick={() => setRevealed(true)}
      className={cn(
        "transition-all",
        revealed ? "" : "inline cursor-pointer rounded overflow-hidden px-1",
        className
      )}
    >
      <span className={`transition-all ${revealed ? "" : "select-none blur-[3px]"}`}>
        {children}
      </span>
    </span>
  );
}
