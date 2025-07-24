"use client"

import { HTMLAttributes, use } from "react";

import { cn } from "../../utils/cn";
import ShowMoreContext from "./ShowMoreContext";

type ShowMoreContentPropsT = HTMLAttributes<HTMLDivElement>;

function ShowMoreContent({ children, className, ...props }: ShowMoreContentPropsT) {
  const { contentRef, shouldShowMore, isShowMore, maxHeight } = use(ShowMoreContext);

  return (
    <div
      ref={contentRef}
      className={cn("overflow-hidden transition-all", className)}
      style={{
        height: shouldShowMore
          ? isShowMore
            ? contentRef.current?.scrollHeight
              ? `${contentRef.current.scrollHeight}px`
              : "auto"
            : maxHeight
          : "auto"
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default ShowMoreContent
