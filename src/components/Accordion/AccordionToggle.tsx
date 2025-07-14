"use client";

import { ChevronRightIcon } from "lucide-react";
import { HTMLAttributes, ReactNode, use } from "react";

import AccordionContext from "./AccordionContext";

type AccordionTogglePropsT = HTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode
};

function AccordionToggle({ icon, children, onClick, ...props }: AccordionTogglePropsT) {
  const { isOpen, setOpen } = use(AccordionContext);

  return (
    <button
      onClick={ev => {
        onClick?.(ev)
        setOpen(prev => !prev)
      }}
      {...props}
    >
      <span className={`transition-transform ${isOpen ? "rotate-90" : ""}`}>
        {icon || <ChevronRightIcon className="compatible-icon" />}
      </span>
      {children}
    </button>
  )
}

export default AccordionToggle;