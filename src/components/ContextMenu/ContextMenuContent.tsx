"use client";

import { HTMLAttributes, use, useEffect } from "react";

import { cn } from "../../utils/cn";
import ContextMenuContext from "./ContextMenuContext";
import { selectAccessibleChildren } from "../../utils/browser";

type ContextMenuContentPropsT = HTMLAttributes<HTMLDivElement>;

function ContextMenuContent({ onContextMenu, className, ...p }: ContextMenuContentPropsT) {
  const { contentRef, position, isOpen } = use(ContextMenuContext);

  useEffect(() => {
    if (!contentRef.current) {
      return;
    }

    if (isOpen) {
      const children = selectAccessibleChildren(contentRef.current);
      const firstChild = children[0];

      if (!firstChild) {
        return;
      }

      firstChild.focus();
    }
  }, [isOpen, position, contentRef])

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
        isOpen ? "" : "hidden",
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