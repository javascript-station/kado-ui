"use client"

import type { HTMLAttributes } from "react";

import { cn } from "../../utils/cn";
import ProgressContext from "./ProgressContext";

type ProgressRootPropsT = HTMLAttributes<HTMLDivElement> & {
  value: number
  maxValue?: number
}

function ProgressRoot({ value, maxValue = 100, className, ...p }: ProgressRootPropsT) {
  return (
    <ProgressContext value={{ value, maxValue }}>
      <div
        className={cn("w-full rounded-full h-6 bg-palette/10", className)}
        {...p}
      />
    </ProgressContext>
  )
}

export default ProgressRoot;