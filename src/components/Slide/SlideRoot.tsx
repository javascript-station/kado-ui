"use client";

import { PropsWithChildren, useEffect, useState } from "react";

import { SlideContext } from "./SlideContext";

type SlideRootPropsT = PropsWithChildren;

function SlideRoot({ children }: SlideRootPropsT) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const rootElem = document.getElementById("root");
    if (!rootElem) {
      return;
    };

    const bodyElem = document.body;

    if (isOpen) {
      bodyElem.classList.add("overflow-hidden");
      rootElem.classList.add("translate-x-full");
    } else {
      bodyElem.classList.remove("overflow-hidden");
      rootElem.classList.remove("translate-x-full");
    };

    return () => {
      bodyElem.classList.remove("overflow-hidden");
      rootElem.classList.remove("translate-x-full");
    };
  }, [isOpen]);

  return (
    <SlideContext value={{ isOpen, setOpen }}>
      {children}
    </SlideContext>
  )
}

export default SlideRoot