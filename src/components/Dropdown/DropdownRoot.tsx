"use client";

import { HTMLAttributes, useEffect, useState } from "react";

import { cn } from "../../utils/cn";
import DropdownContext from "./DropdownContext";

type DropdownRootPropsT = HTMLAttributes<HTMLDivElement>;

function DropdownRoot({ className, ...p }: DropdownRootPropsT) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const closeHandler = () => {
      setOpen(false);
    }

    window.addEventListener("click", closeHandler);

    return () => window.removeEventListener("click", closeHandler);
  }, []);

  return (
    <DropdownContext value={{ isOpen, setOpen }}>
      <div className={cn("relative w-fit max-w-full", className)} {...p} />
    </DropdownContext>
  )
}

export default DropdownRoot