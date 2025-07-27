"use client"

import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../utils/cn";
import BreadcrumbsContext from "./BreadcrumbsContext";

type BreadcrumbsRootPropsT = HTMLAttributes<HTMLElement> & {
  separator?: ReactNode
}

function BreadcrumbsRoot({ separator = "/", className, ...p }: BreadcrumbsRootPropsT) {
  return (
    <BreadcrumbsContext value={{ separator }}>
      <nav
        className={cn("f-align gap-3", className)}
        {...p}
      />
    </BreadcrumbsContext>
  )
}

export default BreadcrumbsRoot;
