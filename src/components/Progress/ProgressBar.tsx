"use client"

import { use } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

import { cn } from "../../utils/cn";
import ProgressContext from "./ProgressContext";

type ProgressBarPropsT = HTMLMotionProps<"div"> & {
  duration?: number;
};

function ProgressBar({ className, duration, children, ...p }: ProgressBarPropsT) {
  const { value, maxValue } = use(ProgressContext);

  const percentage = Math.min(100, Math.max(0, (value / maxValue) * 100));

  return (
    <motion.div
      className={cn("f-center h-full bg-palette text-brush rounded-full max-w-full", className)}
      initial={{ width: 0 }}
      whileInView={{ width: `${percentage}%` }}
      transition={{ duration: duration || 3 }}
      {...p}
    >
      {children || <span className="text-xs">{percentage}%</span>}
    </motion.div>
  )
}

export default ProgressBar;