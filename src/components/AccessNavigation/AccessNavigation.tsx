"use client";

import { HTMLAttributes, KeyboardEvent } from "react";

import { selectAccessibleChildren } from "../../utils/browser";

type AccessNavigationPropsT = HTMLAttributes<HTMLDivElement> & {
  direction?: "y" | "x";
};

function AccessNavigation({ direction = "y", onKeyDown, ...p }: AccessNavigationPropsT) {
  const handleKeyDown = (ev: KeyboardEvent<HTMLDivElement>) => {
    const focusableChildren = selectAccessibleChildren(ev.currentTarget);

    if (!focusableChildren.length) {
      return;
    }

    const currentIndex = focusableChildren.findIndex((item) => item === document.activeElement);

    if (ev.key === (direction === "y" ? "ArrowDown" : "ArrowRight")) {
      ev.preventDefault();
      const nextIndex =
        currentIndex === -1 || currentIndex === focusableChildren.length - 1 ? 0 : currentIndex + 1;
      focusableChildren[nextIndex].focus();
    }

    if (ev.key === (direction === "y" ? "ArrowUp" : "ArrowLeft")) {
      ev.preventDefault();
      const prevIndex = currentIndex <= 0 ? focusableChildren.length - 1 : currentIndex - 1;
      focusableChildren[prevIndex].focus();
    }
  }

  return (
    <div
      onKeyDown={ev => {
        onKeyDown?.(ev);
        handleKeyDown(ev);
      }}
      {...p}
    />
  )
}

export default AccessNavigation;