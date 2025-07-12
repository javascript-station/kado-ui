"use client";

import { HTMLAttributes, use } from "react";
import { SheetContext } from "./SheetContext";

type SheetTogglePropsT = HTMLAttributes<HTMLButtonElement>;

function SheetToggle({ onClick, ...props }: SheetTogglePropsT) {
  const { setOpen } = use(SheetContext);

  return (
    <button
      onClick={ev => {
        onClick?.(ev)
        setOpen(prev => !prev)
      }}
      {...props}
    />
  )
}

export default SheetToggle;