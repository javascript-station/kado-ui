"use client";

import { HTMLAttributes, use } from "react";
import { ChevronRightIcon } from "lucide-react";

import PaginationContext from "./PaginationContext";

type PaginationNextBtnPropsT = HTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
};

function PaginationNextBtn({ onClick, disabled, children, ...props }: PaginationNextBtnPropsT) {
  const { page, pageLength, nextPage } = use(PaginationContext);

  return (
    <button
      onClick={ev => {
        onClick?.(ev);
        nextPage();
      }}
      disabled={disabled || page === pageLength}
      {...props}
    >
      {children || <ChevronRightIcon className="compatible-icon" />}
    </button>
  )
}

export default PaginationNextBtn;