"use client"

import { motion, HTMLMotionProps } from "framer-motion";

type SwapItemPropsT = HTMLMotionProps<"span">;

function SwapItem(p: SwapItemPropsT) {
  return (
    <motion.span
      initial={{ rotate: 90, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      exit={{ rotate: 90, opacity: 0 }}
      {...p}
    />
  )
}

export default SwapItem;
