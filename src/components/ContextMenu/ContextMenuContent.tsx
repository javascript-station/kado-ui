"use client";

import { HTMLAttributes, use } from "react";

import { cn } from "../../utils/cn";
import ContextMenuContext from "./ContextMenuContext";

type ContextMenuContentPropsT = HTMLAttributes<HTMLDivElement>;

function ContextMenuContent({ onContextMenu, className, ...p }: ContextMenuContentPropsT) {
  const { contentRef, position, isOpen } = use(ContextMenuContext);

  return (
    <div
      ref={contentRef}
      onContextMenu={ev => {
        ev.stopPropagation();
        ev.preventDefault();
        onContextMenu?.(ev);
      }}
      className={cn(
        "z-50 fixed",
        position ? "transition-all" : "",
        isOpen ? "" : "ignore",
        className
      )}
      style={{
        top: position?.y,
        left: position?.x,
      }}
      {...p}
    />
  )
}

export default ContextMenuContent;