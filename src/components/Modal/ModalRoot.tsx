"use client"

import { useState, useEffect, PropsWithChildren } from "react";

import ModalContext from "./ModalContext";
import { getBrowserScrollbarWith } from "../../utils/browser";

type ModalRootPropsT = PropsWithChildren & {
  defaultOpen?: boolean;
};

function ModalRoot({ children, defaultOpen = false }: ModalRootPropsT) {
  const [isOpen, setOpen] = useState(defaultOpen);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
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
    <ModalContext value={{ isOpen, setOpen }}>
      {children}
    </ModalContext>
  );
};

export default ModalRoot;