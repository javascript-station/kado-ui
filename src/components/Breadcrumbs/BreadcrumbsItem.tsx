"use client"

import { type HTMLAttributes, use } from "react";

import { cn } from "../../utils/cn";
import BreadcrumbsContext from "./BreadcrumbsContext";

type BreadcrumbsItemPropsT = HTMLAttributes<HTMLDivElement> & {
  isLast?: boolean;
}

function BreadcrumbsItem({ isLast = false, className, children, ...p }: BreadcrumbsItemPropsT) {
  const { separator } = use(BreadcrumbsContext);

  return (
    <div
      className={cn("f-center gap-1.5", className)}
      {...p}
    >
      {children}
      {!isLast && separator}
    </div>
  )
}

export default BreadcrumbsItem;