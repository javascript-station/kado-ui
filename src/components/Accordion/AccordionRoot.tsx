"use client";

import { PropsWithChildren, useState } from "react";

import AccordionContext from "./AccordionContext";

type AccordionRootPropsT = PropsWithChildren;

function AccordionRoot({ children }: AccordionRootPropsT) {
  const [isOpen, setOpen] = useState(false);

  return (
    <AccordionContext value={{ isOpen, setOpen }}>
      {children}
    </AccordionContext>
  )
}

export default AccordionRoot;