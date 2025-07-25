"use client";

import { HTMLAttributes, use } from "react";
import { ChevronLeftIcon } from "lucide-react";

import PaginationContext from "./PaginationContext";

type PaginationPrevBtnPropsT = HTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
};

function PaginationPrevBtn({ onClick, disabled, children, ...props }: PaginationPrevBtnPropsT) {
  const { page, prevPage } = use(PaginationContext);

  return (
    <button
      disabled={disabled || page === 1}
      onClick={ev => {
        onClick?.(ev);
        prevPage();
      }}
      {...props}
    >
      {children || <ChevronLeftIcon className="compatible-icon" />}
    </button>
  )
}

export default PaginationPrevBtn;