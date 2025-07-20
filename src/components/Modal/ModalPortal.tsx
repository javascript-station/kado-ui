"use client";

import { use } from "react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";

import Portal from "../Portal/Portal";
import { cn } from "@/kado-ui/utils/cn";
import ModalContext from "./ModalContext";
import ClientOnly from "../ClientOnly/ClientOnly";

type ModalPortalPropsT = HTMLMotionProps<"div">;

function ModalPortal({ onClick, className, ...props }: ModalPortalPropsT) {
  const { isOpen, setOpen } = use(ModalContext);

  return (
    <ClientOnly>
      <Portal>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={ev => {
                onClick?.(ev);
                setOpen(false);
              }}
              className={cn(
                "fixed inset-0 z-50 f-center bg-foreground/10",
                className
              )}
              {...props}
            />
          ) : null}
        </AnimatePresence>
      </Portal>
    </ClientOnly>
  );
};

export default ModalPortal;