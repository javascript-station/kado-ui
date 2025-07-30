"use client"

import { useState, useEffect, PropsWithChildren } from "react";

import DrawerContext from "./DrawerContext";
import { getBrowserScrollbarWith } from "../../utils/browser";

type DrawerRootPropsT = PropsWithChildren;

function DrawerRoot({ children }: DrawerRootPropsT) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
        setOpen(false);
      };
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [])

  useEffect(() => {
    const scrollbarWidth = getBrowserScrollbarWith();

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  return (
    <DrawerContext value={{ isOpen, setOpen }}>
      {children}
    </DrawerContext>
  );
};

export default DrawerRoot;