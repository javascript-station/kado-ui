"use client";

import { use } from "react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";

import { cn } from "../../utils/cn";
import Portal from "../Portal/Portal";
import DrawerContext from "./DrawerContext";
import ClientOnly from "../ClientOnly/ClientOnly";

type DrawerPortalPropsT = HTMLMotionProps<"div">;

function DrawerPortal({ onClick, className, ...props }: DrawerPortalPropsT) {
  const { isOpen, setOpen } = use(DrawerContext);

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
                "fixed inset-0 z-50 bg-foreground/50",
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

export default DrawerPortal;