"use client"

import { use, useEffect, useRef } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

import { cn } from "../../utils/cn";
import ModalContext from "./ModalContext";

type ModalContentPropsT = HTMLMotionProps<"div">;

function ModalContent({ onClick, className, ...props }: ModalContentPropsT) {
  const { isOpen } = use(ModalContext);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const indexElement = contentRef.current?.querySelector("[data-modal='index']") as HTMLElement | null | undefined;
      indexElement?.focus();
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ ease: "easeInOut" }}
          onClick={ev => {
            onClick?.(ev);
            ev.stopPropagation();
          }}
          className={cn(
            "bg-background rounded-2xl w-max max-w-[90%] h-full max-h-[90%]",
            className,
          )}
          {...props}
        />
      ) : null}
    </AnimatePresence>
  );
};

export default ModalContent;
