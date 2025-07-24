"use client"

import { AnimatePresence } from "framer-motion";
import { HTMLAttributes, useState } from "react";

import SwapContext from "./SwapContext";


type SwapRootPropsT = HTMLAttributes<HTMLDivElement> & {
  items: string[];
  defaultItem?: string;
  onSwap?: (item: string) => void;
}

function SwapRoot({ items, defaultItem, onSwap, ...p }: SwapRootPropsT) {
  const [activeItem, setActiveItem] = useState(defaultItem || items[1]);

  const handleSwap = (newItem: string) => {
    setActiveItem(newItem);
    onSwap?.(newItem);
  }

  return (
    <SwapContext value={{ items, activeItem, handleSwap }} >
      <AnimatePresence mode="wait">
        <div {...p} />
      </AnimatePresence>
    </SwapContext>
  )
}

export default SwapRoot;
