"use client";

import { HTMLAttributes, KeyboardEvent, useEffect, useRef, useState } from "react";

import { cn } from "../../utils/cn";
import DropdownContext from "./DropdownContext";
import { selectAccessibleChildren } from "../../utils/browser";

type DropdownRootPropsT = HTMLAttributes<HTMLDivElement> & {
  accessHorizontalArrows?: "ArrowRight" | "ArrowLeft";
};

function DropdownRoot({ accessHorizontalArrows, onKeyDown, className, ...p }: DropdownRootPropsT) {
  const [isOpen, setOpen] = useState(false);

  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeHandler = () => {
      setOpen(false);
    }

    window.addEventListener("click", closeHandler);

    return () => window.removeEventListener("click", closeHandler);
  }, []);

  useEffect(() => {
    if (isOpen) {
      selectFirstMenuChild();
    }
  }, [isOpen]);

  const selectFirstMenuChild = () => {
    if (!menuRef.current) {
      return;
    }

    const children = selectAccessibleChildren(menuRef.current);
    const firstChild = children[0];

    if (!firstChild) {
      return;
    }

    firstChild.focus();
  }

  const handleKeyDown = (ev: KeyboardEvent<HTMLDivElement>) => {
    if (!accessHorizontalArrows) {
      return null;
    }

    if (ev.key === "ArrowRight") {
      if (accessHorizontalArrows === "ArrowRight") {
        setOpen(true);
        selectFirstMenuChild();
      } else {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    if (ev.key === "ArrowLeft") {
      if (accessHorizontalArrows === "ArrowLeft") {
        setOpen(true);
        selectFirstMenuChild();
      } else {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
  }

  return (
    <DropdownContext value={{
      isOpen, setOpen, toggleRef, menuRef
    }}>
      <div
        className={cn("relative w-fit max-w-full", className)}
        onKeyDown={ev => {
          onKeyDown?.(ev);
          handleKeyDown(ev);
        }}
        {...p}
      />
    </DropdownContext>
  )
}

export default DropdownRoot