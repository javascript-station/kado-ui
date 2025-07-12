"use client";

import { HTMLAttributes, use } from "react";

import { cn } from "../../utils/cn";
import Portal from "../Portal/Portal";
import { SlideContext } from "./SlideContext";

type SlidePortalPropsT = HTMLAttributes<HTMLDivElement>;

function SlidePortal({ className, ...props }: SlidePortalPropsT) {
  const slide = use(SlideContext);

  return (
    <Portal>
      <div
        className={cn(
          "w-screen h-dvh bg-background fixed top-0 left-0 transition-all duration-700",
          slide.isOpen ? "" : "faint -translate-x-full",
          className
        )}
        {...props}
      />
    </Portal>
  );
};

export default SlidePortal;
