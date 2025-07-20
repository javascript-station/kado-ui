"use client";

import { HTMLAttributes, use } from "react";

import { cn } from "../../utils/cn";
import ScrollXContext from "./ScrollXContext";

type ScrollXContainerPropsT = HTMLAttributes<HTMLDivElement>;

function ScrollXContainer({ children, className, ...p }: ScrollXContainerPropsT) {
  const { scrollRef } = use(ScrollXContext);

  return (
    <div ref={scrollRef} className={cn("f-align-scroll", className)} {...p}>
      {children}
    </div>
  );
}

export default ScrollXContainer;
