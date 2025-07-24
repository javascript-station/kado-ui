"use client";

import { HTMLAttributes, use } from "react";

import SwapContext from "./SwapContext";

type SwapTriggerPropsT = HTMLAttributes<HTMLButtonElement> & {
  item: string;
};

function SwapTrigger({ item, onClick, ...p }: SwapTriggerPropsT) {
  const { items, activeItem, handleSwap } = use(SwapContext);

  return (
    activeItem === item ? (
      <button
        onClick={ev => {
          onClick?.(ev);
          handleSwap(items[items.indexOf(item) + 1 >= items.length ? 0 : items.indexOf(item) + 1]);
        }}
        {...p}
      />
    ) : null
  )
}

export default SwapTrigger;