"use client";

import { HTMLAttributes, use } from "react";

import DropdownContext from "./DropdownContext";

type DropdownTogglePropsT = HTMLAttributes<HTMLButtonElement>;

function DropdownToggle({ onClick, ...props }: DropdownTogglePropsT) {
  const { setOpen } = use(DropdownContext);

  return (
    <button
      onClick={ev => {
        ev.stopPropagation();
        onClick?.(ev);
        setOpen(prev => !prev);
      }}
      {...props}
    />
  )
}

export default DropdownToggle;