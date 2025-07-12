import React, { HTMLAttributes, use } from "react";

import { SlideContext } from "./SlideContext";

type SlideTogglePropsT = HTMLAttributes<HTMLButtonElement>;

function SlideToggle({ onClick, ...props }: SlideTogglePropsT) {
  const slide = use(SlideContext);

  return (
    <button
      onClick={ev => {
        onClick?.(ev)
        slide.setOpen(prev => !prev)
      }}
      {...props}
    />
  );
};

export default SlideToggle;