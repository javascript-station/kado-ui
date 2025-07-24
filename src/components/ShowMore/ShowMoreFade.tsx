"use client";

import { HTMLAttributes, use } from "react";

import { cn } from "../../utils/cn";
import ShowmoreContext from "./ShowMoreContext";

type ShowMoreFadePropsT = HTMLAttributes<HTMLDivElement>;

function ShowMoreFade({ className, ...p }: ShowMoreFadePropsT) {
  const { shouldShowMore, isShowMore } = use(ShowmoreContext);

  return (
    shouldShowMore && !isShowMore ? (
      <div className={cn("absolute inset-0 bg-gradient-to-t from-background from-35% to-transparent", className)} {...p} />
    ) : null
  )
}

export default ShowMoreFade;