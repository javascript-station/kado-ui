"use client"

import { HTMLAttributes, useState } from "react";

import { cn } from "../../utils/cn";
import RatingContext, { RatingContextT } from "./RatingContext";

type RatingRootPropsT = HTMLAttributes<HTMLDivElement>

const RatingRoot = ({ className, ...p }: RatingRootPropsT) => {
  const [hoverValue, setHoverValue] = useState<RatingContextT["hoverValue"]>(null);

  return (
    <RatingContext value={{ hoverValue, setHoverValue }}>
      <div
        className={cn("f-align w-fit max-w-full", className)}
        onMouseLeave={() => setHoverValue(null)}
        {...p}
      />
    </RatingContext>
  )
}

export default RatingRoot;