"use client"

import { HTMLAttributes, useEffect, useRef, useState } from "react";

import { cn } from "../../utils/cn";
import ShowMoreContext from "./ShowMoreContext";

type ShowMoreRootPropsT = HTMLAttributes<HTMLDivElement> & {
  maxLines: number;
  defaultExpanded?: boolean;
}

function ShowMoreRoot({ maxLines, defaultExpanded = false, className, ...p }: ShowMoreRootPropsT) {
  const [shouldShowMore, setShouldShowMore] = useState(false);
  const [isShowMore, setIsShowMore] = useState(defaultExpanded);
  const [maxHeight, setMaxHeight] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const element = contentRef.current;
      const lineHeight = Number.parseInt(window.getComputedStyle(element).lineHeight);
      const maxHeight = lineHeight * (maxLines || 3);
      const actualHeight = element.scrollHeight;

      setMaxHeight(maxHeight);
      setShouldShowMore(actualHeight > maxHeight);
    }
  }, [maxLines])

  return (
    <ShowMoreContext value={{ contentRef, isShowMore, setIsShowMore, maxHeight, shouldShowMore }}>
      <div className={cn("relative", className)} {...p}></div>
    </ShowMoreContext>
  )
}

export default ShowMoreRoot
