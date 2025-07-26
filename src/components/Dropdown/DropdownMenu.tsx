"use client";

import { HTMLAttributes, use } from "react";

import { cn } from "../../utils/cn";
import DropdownContext from "./DropdownContext";

type DropdownMenuPropsT = HTMLAttributes<HTMLDivElement> & {
  preventClose?: boolean;
};

function DropdownMenu({ preventClose, onClick, className, ...p }: DropdownMenuPropsT) {
  const { menuRef, isOpen } = use(DropdownContext);

  return (
    isOpen ? (
      <div
        ref={menuRef}
        onClick={ev => {
          if (preventClose) {
            ev.stopPropagation();
          }

          onClick?.(ev);
        }}
        className={cn(
          "absolute w-max z-10",
          className
        )}
        {...p}
      />
    ) : null
  )
}

export default DropdownMenu;