"use client"

import type { HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

type TabsListPropsT = HTMLAttributes<HTMLDivElement>;

function TabsList({ className, ...props }: TabsListPropsT) {
  return (
    <div className={cn("join-border", className)} {...props} />
  )
}

export default TabsList;