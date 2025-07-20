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
      role="button"
      tabIndex={0}
      onClick={() => setRevealed(true)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setRevealed(true);
      }}
      className={cn(
        "cursor-pointer rounded-sm px-1 transition-all duration-300",
        !revealed &&
          "text-transparent bg-foreground/20 dark:bg-foreground/30 backdrop-blur-sm select-none",
        className
      )}
      style={!revealed ? { textShadow: "0 0 6px rgba(255,255,255,0.6)" } : {}}
    >
      {children}
    </span>
  );
}
