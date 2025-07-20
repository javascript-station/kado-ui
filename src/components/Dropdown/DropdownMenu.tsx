"use client";

import { HTMLAttributes, use } from "react";

import { cn } from "../../utils/cn";
import DropdownContext from "./DropdownContext";

type DropdownMenuPropsT = HTMLAttributes<HTMLDivElement> & {
  preventClose?: boolean;
};

function DropdownMenu({ preventClose, onClick, className, ...p }: DropdownMenuPropsT) {
  const { isOpen } = use(DropdownContext);

  return (
    <div
      onClick={ev => {
        if (preventClose) {
          ev.stopPropagation();
        }

        onClick?.(ev);
      }}
      className={cn(
        "absolute w-max transition-all z-10",
        isOpen ? "" : "ignore",
        className
      )}
      {...p}
    />
  )
}

export default DropdownMenu;