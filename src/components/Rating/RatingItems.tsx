"use client";

import { StarIcon } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode, use } from "react";

import { cn } from "../../utils/cn";
import RatingContext from "./RatingContext";

type RatingItemsPropsT = ButtonHTMLAttributes<HTMLButtonElement> & {
  count: number
  value: number
  onValueChange: (newValue: number) => void
  element?: ReactNode
  activeElement?: ReactNode
}

function RatingItems({ count, value, onValueChange, element, activeElement, className, ...p }: RatingItemsPropsT) {
  const { hoverValue, setHoverValue } = use(RatingContext);

  const defaultElement = element || <StarIcon className="icon-size-3 text-palette" />;
  const defaultActiveElement = activeElement || <StarIcon className="icon-size-3 text-palette fill-palette" />;

  const displayValue = hoverValue !== null ? hoverValue : value;

  return (
    Array.from({ length: count }).map((_, index) => {
      const itemValue = index + 1;
      const isActive = itemValue <= displayValue;

      return (
        <button
          key={index}
          role="radio"
          type="button"
          className={cn(
            "transition-all px-0.5 not-active:hover:-translate-y-0.5",
            className
          )}
          aria-checked={itemValue === value}
          onClick={() => onValueChange(itemValue)}
          onMouseEnter={() => setHoverValue(itemValue)}
          aria-label={`${itemValue} out of ${count} stars`}
          {...p}
        >
          {isActive ? defaultActiveElement : defaultElement}
        </button>
      )
    })
  )
}

export default RatingItems;